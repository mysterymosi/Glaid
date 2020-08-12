import store from "../store";

export const signup = function(userInfo) {
    return store.dispatch("customer/signup", userInfo);
};

export const compile_otp_details = function(name, email, tel, password) {
    console.log("copilation works");
    return {
        fullName: name,
        email: email,
        tel: tel,
        password: password
    };
};