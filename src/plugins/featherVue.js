import { FeatherClient } from "feather-client-js";
import AuthenticationForm from "./AuthenticationForm.vue";

const FeatherVue = {
  install(Vue, options) {
    Vue.prototype.$feather = FeatherClient(options.apiKey, options.config);
    Vue.component(AuthenticationForm.name, AuthenticationForm);
  }
};
export default FeatherVue;
