<template>
  <div class="bottom-bar">
    <div>客服</div>
    <div>店铺</div>
    <div>收藏</div>
    <div @click="addCart">加入购物车</div>
    <div @click="toCart">购买</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    addCart() {
      this.$emit("addCart");
    },
    toCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  height: 49px;
  background: white;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
}
.bottom-bar div {
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 12px;
  border: 1px solid;
  cursor: pointer;
  border-right: none;
}
</style>
