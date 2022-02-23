export default {
  // 购物车数量
  cartCount(state) {
    return state.productList.length;
  },
  // 购物车列表
  cartList(state) {
    return state.productList;
  },
};

// export default
