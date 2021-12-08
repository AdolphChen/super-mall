import { request } from "./request";

// 首页轮播图
export function getHomeSwiper() {
  return request({
    url: "/home/multidata",
  });
}
