<template>
  <div class="about">
    <div v-if="!isAwaitingOtp" class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="main-panel">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <div class="brand-logo">
                  <img src="../assets/logo.svg" alt="logo">
                </div>
                <h4>New here?</h4>
                <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <input type="text" v-model="name" class="form-control form-control-lg" id="exampleInputame1" placeholder="Full Name">
                  </div>
                  <div class="form-group">
                    <input type="email" v-model="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <input type="tel" v-model="phoneNumber" class="form-control form-control-lg" placeholder="Phone Number">
                  </div>
                  
                  <div class="form-group">
                    <input type="password" v-model="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="reEnterPassword" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Re-enter Password">
                  </div>
                  <div class="mb-4">
                    <!-- <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input">
                        I agree to all Terms & Conditions
                      </label>
                    </div> -->
                  </div>
                  <div class="mt-3">
                    <button @click.prevent="signup" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">Continue</button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Already have an account? <a href="login.html" class="text-primary">Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
  <OtpForm @sendOtp="submitOtp($event)" v-if="isAwaitingOtp" />
  </div>
</template>

<script>
import { required, minLength} from "vuelidate/lib/validators";
export default {
  components: {
    OtpForm: () => import("@/components/OtpForm.vue")
  },
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      reEnterPassword: "",
      isAwaitingOtp: false,
      otp_details: {
        name: "",
        email: "",
        tel: "",
        password: "",
        otp: ""
      }
    };
  },

  methods: {
    signup() {
      let userInfo = {
        fullName: this.name,
        email: this.email,
        tel: this.phoneNumber,
        password: this.password
      };
      this.otp_details = {
        name: this.name,
        email: this.email,
        tel: this.phoneNumber,
        password: this.password
      };

      console.log("user info: ", userInfo);
      this.$store.dispatch("customer/signup", userInfo).then(() => {
        // this.$router.replace({ path: "/"});
        this.isAwaitingOtp = true
      });
    },

    submitOtp(otp) {
      let otp_info = {
        fullName: this.otp_details.name,
        email: this.otp_details.email,
        tel: this.otp_details.tel,
        password: this.otp_details.password,
        otp: otp
      };
      console.log("otp: ", otp_info);
      this.$store.dispatch("customer/signup", otp_info).then(() => {
        console.log("redirecting...");
      }); 
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    }
  }
};
</script>

<style scoped>
@import "../assets/auth/css/materialdesignicons.min.css";
@import "../assets/auth/css/vendor.bundle.base.css";
@import "../assets/auth/css/style.css";
.dirty {
  border-color: #5A5;
  background: #EFE;
}

.dirty:focus {
  outline-color: #8E8;
}

.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}
</style>