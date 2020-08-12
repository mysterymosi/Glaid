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
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3">
                  <div class="form-group">
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
                  </div>
                  <div class="mt-3">
                    <button
                      @click.prevent="login"
                      class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    >SIGN IN</button>
                  </div>
                  <div class="text-center align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <a href="#" class="auth-link text-black">Forgot password?</a>
                      </label>
                    </div>
                  </div>
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
  <!-- container-scroller -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          console.log("login works");
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/auth/css/materialdesignicons.min.css";
@import "../assets/auth/css/vendor.bundle.base.css";
@import "../assets/auth/css/style.css";
</style>
