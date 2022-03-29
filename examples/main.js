import Vue from "vue";
import App from "./App.vue";
import Footer from "../packages";

Vue.config.productionTip = false;

Vue.use(Footer);

new Vue({
  render: h => h(App)
}).$mount("#app");
