import { request } from "./request";

export function getDetails(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}

export function recommend() {
  return request({
    url: "/recommend",
  });
}
// 通过class将某组件需要的部分数据整合成一个对象 让该组件面向一个对象编程
export class goodsInfo {
  constructor(columns, services, itemInfo) {
    this.title = services.title;
    this.desc = services.desc;
    this.newPrice = services.price;
    this.oldPrice = services.oldPrice;
    this.discount = services.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = services.lowNowPrice;
    this.itemInfo = itemInfo;
    this.iid = services.iid;
  }
}

// 商品商店信息
export class goodShopInfo {
  constructor(shopInfo) {
    this.icon = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sellCount = shopInfo.cSells;
    this.goodsCount = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

// 商品尺寸信息
export class goodSizeInfo {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.rule = rule;
    this.info = info;
  }
}
