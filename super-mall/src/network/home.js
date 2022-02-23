import { request } from "./request";

// 首页轮播图
export function getHomeSwiper() {
  return request({
    url: "/home/multidata",
  });
}
// 首页商品数据
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
