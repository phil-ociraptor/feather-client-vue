import AuthenticationForm from "./AuthenticationForm.vue";

const FeatherVue = {
  install(Vue) {
    Vue.prototype.$feather = {
      currentUser: "Bob",
      loading: "",
      error: ""
    };
    Vue.component(AuthenticationForm.name, AuthenticationForm);
    Vue.mixin({
      mounted() {
        console.log("Now you see me!");
      }
    });
  }
};
export default FeatherVue;
