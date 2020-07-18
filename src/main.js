import Vue from "vue";
import App from "./App.vue";
import FeatherVue from "./plugins/featherVue";

Vue.config.productionTip = false;

Vue.use(FeatherVue, {
  apiKey: "pk_live_fE8thg7sVgQ5fmSL8UYNfPnYZZSsdE"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
