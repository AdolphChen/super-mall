import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);
// 引入vuex文件
import store from "./store/index";
// 引入路由文件
import router from "./router/index";
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue({});
// import Router from "./router/index"; 并且在vue初始化使用Router会报错 无法matched
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
