import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper);
// 引入路由文件
import router from "./router/index";
Vue.config.productionTip = false;
// import Router from "./router/index"; 并且在vue初始化使用Router会报错 无法matched
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
