<template>
  <div class="cart-list">
    <bs-scroll class="content" :probe-type="3">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index + item"
        :listItem="item"
      />
    </bs-scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BsScroll from "components/common/scroll/Scroll";
import CartListItem from "./cartListItem";
export default {
  name: "",
  data() {
    return {
      scroll: null,
    };
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  components: {
    BsScroll,
    CartListItem,
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 49px);
}
.content {
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: calc(100vh - 49px - 44px);
}
</style>
