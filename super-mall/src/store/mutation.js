import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
  // 为了保持mutations的功能单一性
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true;
    state.productList.push(payload);
  },
};
