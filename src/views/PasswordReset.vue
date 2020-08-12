<template>
  <div>
    <div v-if="pickedValue === ''" class="container-scroller">
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
                  <h6
                    class="font-weight-light"
                  >If you cannot remember your password, we can help. To get started, choose an option below.</h6>
                  <form class="pt-3">
                    <div class="form-group">
                      <div class="form-check form-check-primary">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            v-model="picked"
                            class="form-check-input"
                            name="PasswordRemember"
                            id="ExampleRadio1"
                            value="email"
                          />
                          I know my email
                        </label>
                      </div>
                      <div class="form-check form-check-primary">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            v-model="picked"
                            class="form-check-input"
                            name="PasswordRemember"
                            id="ExampleRadio2"
                            value="tel"
                          />
                          I know my phone number
                        </label>
                      </div>
                      <!-- <div class="form-check form-check-info">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="ExampleRadio3"
                          id="ExampleRadio3"
                          checked
                        />
                        Info
                      </label>
                    </div>
                    <div class="form-check form-check-danger">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="ExampleRadio4"
                          id="ExampleRadio4"
                          checked
                        />
                        Danger
                      </label>
                    </div>
                    <div class="form-check form-check-warning">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="ExampleRadio5"
                          id="ExampleRadio5"
                          checked
                        />
                        Warning
                      </label>
                      </div>-->
                    </div>
                    <!-- <div class="form-group">
                      <input
                        type="email"
                        v-model="email"
                        class="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Email Address"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        v-model="password"
                        class="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div> -->
                    <div class="mt-3">
                      <button
                        @click.prevent="handleOption"
                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >Continue</button>
                    </div>
                    <!-- <div class="text-center align-items-center">
                      <div class="form-check">
                        <label class="form-check-label text-muted">
                          <a href="#" class="auth-link text-black">Forgot password?</a>
                        </label>
                      </div>
                    </div> -->
                    <!-- <div class="mb-2">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                      <i class="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                    </div>-->
                    <div class="text-center mt-4 font-weight-light">
                      Don't have an account?
                      <a href="register.html" class="text-primary">Create</a>
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
    <ResetViaEmail v-if="pickedValue === 'email'" />
    <ResetViaPhone v-if="pickedValue === 'tel'" />
    <OtpForm v-if="false"/>
    <VueInjectJs src="/auth/js/jquery-3.4.1.min.js" />
    <VueInjectJs src="/auth/js/template.js" />
    <VueInjectJs src="/auth/js/vendor.bundle.base.js" />
  </div>

  <!-- container-scroller -->
</template>

<script>
import VueInjectJs from "vue-inject-js";
export default {
  components: {
    VueInjectJs,
    ResetViaEmail: () => import("@/components/ResetViaEmail.vue"),
    ResetViaPhone: () => import("@/components/ResetViaPhone.vue"),
    OtpForm: () => import("@/components/OtpForm.vue")
  },
  data() {
    return {
      email: "",
      password: "",
      picked: "",
      pickedValue: ""
    };
  },

  methods: {
    handleOption() {
      this.pickedValue = this.picked;
    }
  }
  // methods: {
  //   login() {
  //     this.$store
  //       .dispatch("login", {
  //         email: this.email,
  //         password: this.password
  //       })
  //       .then(() => {
  //         console.log("login works");
  //       });
  //   }
  // }
};
</script>

<style scoped>
@import "../assets/auth/css/materialdesignicons.min.css";
@import "../assets/auth/css/vendor.bundle.base.css";
/* @import "../assets/auth/css/select2.min.css";
@import "../assets/auth/css/select2-bootstrap.min.css"; */
@import "../assets/auth/css/style.css";
</style>
