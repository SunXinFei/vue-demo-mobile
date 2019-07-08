import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import "@/style/common.scss";
import "normalize.css";
import moment from 'moment';
import * as CONST from "./constant";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

// import Mock from './mock'
// Mock.bootstrap();

Object.defineProperty(Vue.prototype, '$moment', { value: moment });

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$CONST = CONST;

window.$vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
