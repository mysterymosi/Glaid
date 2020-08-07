import axios from "axios";
const customer = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    signup(context, payload) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
       return axios
        .post(
          proxyurl + "https://glaid.herokuapp.com/customer/register",
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
  },
};

export default customer;
