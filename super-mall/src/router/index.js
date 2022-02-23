import Vue from "vue";
import VueRouter from "vue-router";
// 组件懒加载 const 组件名 = () => import('路径地址')
const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Category");
const Cart = () => import("../views/cart/Cart");
const Profile = () => import("../views/profile/Profile");
const Detail = () => import("../views/details/Detail");

// 使用插件
Vue.use(VueRouter);
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:iid",
    component: Detail,
  },
];

const Router = new VueRouter({
  mode: "history",
  routes: routes,
});
// 导出路由
export default Router;
