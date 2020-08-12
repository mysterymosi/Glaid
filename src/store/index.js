import Vue from "vue";
import Vuex from "vuex";
import customer from "./modules/customer";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    login(context, payload) {
      return axios.post("https://glaid.herokuapp.com/login", payload).then((res) => {
        console.log("login: ", res);
      }).catch((err) => {
        console.log("error: ", err);
      });
    }
  },
  modules: {
    customer
  }
});
