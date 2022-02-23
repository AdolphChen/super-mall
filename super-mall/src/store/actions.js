import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
  addToCart(context, payload) {
    console.log(context.state.productList, "------tnet");

    // let oldProduct = null;
    // 通过for循环找到和添加的iid同样的item
    // 如果已经有添加过iid的数据，则该数据的count+1
    // 如果没有 则将payload直接push进数组 count = 1
    // for (let item of state.productList) {
    //   if ((item.iid = payload.iid)) {
    //     console.log("1");
    //     oldProduct = item;
    //   }
    // }
    // 通过indexOf下标的方式判断是否存在该数值，且通过state.productList[index]的方式取到该值
    // let index = state.productList.indexOf(payload.iid);
    // 通过find查找具有相同iid的数据 并返回
    // let oldProduct = state.productList.find(function (item) {
    //   return item.iid === payload.iid;
    // });
    let oldProduct = context.state.productList.find(
      (item) => item.iid === payload.iid
    );
    if (oldProduct) {
      context.commit(ADD_COUNT, oldProduct);
    } else {
      payload.count = 1;
      context.commit(ADD_TO_CART, payload);
      // content.state.productList.push(payload);
    }
  },
};
