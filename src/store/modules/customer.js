import axios from "axios";
const customer = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    signup(context, payload) {
       return axios
        .post(
          "https://glaid.herokuapp.com/customer/register",
          payload
        )
        .then((res) => {
          if (res.data.status === 200) {
            console.log("signup: ", res);
            return res.data;
          } else {
            return res.data;
          }
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    },

    submit_otp(context, payload) {
      return axios.post("https://glaid.herokuapp.com//validate_otp", payload).then((res) => {
        console.log("otp res: ", res);
      }).catch((err) => {
        console.log("error: ", err);
      });
    }
  },
};

export default customer;
