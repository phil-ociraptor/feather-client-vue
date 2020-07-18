import { FeatherClient } from "feather-client-js";
import AuthenticationForm from "./AuthenticationForm.vue";

const FeatherVue = {
  install(Vue, options) {
    Vue.prototype.$feather = FeatherClient(options.apiKey, options.config);
    // let asdf = {
    //   currentUser: "Bob",
    //   loading: "",
    //   error: ""
    // };
    Vue.component(AuthenticationForm.name, AuthenticationForm);
    Vue.mixin({
      mounted() {
        console.log("Now you see me!");
      }
    });
  }
};
export default FeatherVue;
