<template>
  <div v-if="Object.keys(goodShopInfo).length !== 0">
    <div class="shopInfo">
      <img :src="goodShopInfo.icon" alt="" />
      <span>{{ goodShopInfo.name }}</span>
    </div>
    <div class="shopCount">
      <div>
        <span>{{ goodShopInfo.sellCount | sellCount }}</span>
        <div>总销量</div>
      </div>
      <div class="goodsCount">
        <span>{{ goodShopInfo.goodsCount }}</span>
        <div>全部宝贝</div>
      </div>
      <div class="shopDesc">
        <div v-for="(item, index) in goodShopInfo.score" :key="item + index">
          <span>{{ item.name }}</span>
          <span class="normal" :class="{ better: item.isBetter }">{{
            item.score
          }}</span>
          <span class="normal" :class="{ better: item.isBetter }">
            {{ item.isBetter ? "高" : "低" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodShopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    sellCount: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.shopInfo {
  margin: 15px 10px;
}
.shopInfo img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 5px;
  border: 1px solid;
}
.shopInfo span {
  position: relative;
  top: -15px;
}
.shopCount {
  display: flex;
  margin: 10px 10px;
}
.shopCount div {
  flex: 1;
}
.goodsCount span:nth-child(1) {
  text-align: center;
}
.shopDesc {
  font-size: 12px;
}
.shopDesc div {
  display: flex;
  justify-content: space-between;
}
.shopDesc div span {
  text-align: left;
}
.normal {
  color: aquamarine;
}
.better {
  color: deeppink;
}
</style>
