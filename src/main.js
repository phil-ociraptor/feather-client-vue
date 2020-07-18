import Vue from "vue";
import App from "./App.vue";
import FeatherVue from "./plugins/featherVue";

Vue.config.productionTip = false;

Vue.use(FeatherVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
