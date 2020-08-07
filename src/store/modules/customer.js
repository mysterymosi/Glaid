import axios from "axios";
const customer = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    signup(context, payload) {
       return axios
        .post(
          process.env.VUE_APP_PROXY_URL + "https://glaid.herokuapp.com/customer/register",
          payload
        )
        .then((res) => {
          if (res.data.status === 200) {
            console.log("signup: ", res);
          }
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    },

    submit_otp(context, payload) {
      return axios.post(process.env.VUE_APP_PROXY_URL + "https://glaid.herokuapp.com//validate_otp", payload).then((res) => {
        console.log("otp res: ", res);
      }).catch((err) => {
        console.log("error: ", err);
      });
    }
  },
};

export default customer;
