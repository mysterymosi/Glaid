<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="main-panel">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <div class="brand-logo">
                  <img src="../assets/logo.svg" alt="logo" />
                </div>
                <h4>Forgot Password</h4>
                <h6 class="font-weight-light">Please enter the email address associated with your account below.</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="otp"
                      class="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email Address"
                    />
                  </div>
                  <hr>
                  <!-- <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div> -->
                  <div class="mt-3">
                    <button @click.prevent="submitOtp"
                      class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    >Send Email</button>
                  </div>
                  <!-- <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" class="auth-link text-black">Forgot password?</a>
                  </div> -->
                  <!-- <div class="mb-2">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                      <i class="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div> -->
                  <!-- <div class="text-center mt-4 font-weight-light">
                    Did not receive an OTP?
                    <a @click.prevent="resendOtp" href="register.html" class="text-primary">Resend</a>
                  </div> -->
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
</template>

<script>
import { signup } from "../utils";
export default {
  props: {
    name: {
      type: String
    },
    email: {
      type: String
    },
    tel: {
      type: String
    },
    password: {
      type: String
    }
  },
  data() {
    return {
      otp: ""
    };
  },

  methods: {
    submitOtp() {
      this.$emit("sendOtp", this.otp);
    },

    resendOtp() {
      let userInfo = {
        fullName: this.name,
        email: this.email,
        tel: this.tel,
        password: this.password
      }
      console.log("info: ", userInfo);
      signup(userInfo).then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err)
      });
    }
  }
};
</script>

<style>

</style>