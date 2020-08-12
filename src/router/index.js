import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "Signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => 
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/password_reset",
    name: "PasswordReset",
    component: () => 
      import(/* webpackChunkName: "password_reset" */ "../views/PasswordReset.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
