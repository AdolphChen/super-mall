<template>
  <div v-if="Object.keys(goodInfo).length !== 0">
    <div class="goodInfo-title">{{ goodInfo.title }}</div>
    <div class="goodInfo-price">
      <span class="goodInfo-newPrice">¥{{ goodInfo.realPrice }}</span>
      <span class="goodInfo-oldPrice">{{ goodInfo.oldPrice }}</span>
      <span v-if="goodInfo.discount" class="goodInfo-discount">{{
        goodInfo.discount
      }}</span>
    </div>
    <div class="goodInfo-other">
      <span>{{ goodInfo.columns[0] }}</span>
      <span>{{ goodInfo.columns[1] }}</span>
      <span>{{ goodInfo.itemInfo[goodInfo.itemInfo.length - 1].name }}</span>
    </div>
    <div class="goodInfo-services">
      <span v-for="index in goodInfo.itemInfo.length - 1" :key="index">
        <img
          v-if="goodInfo.itemInfo[index - 1].icon"
          :src="goodInfo.itemInfo[index - 1].icon"
          alt=""
        />
        <span>{{ goodInfo.itemInfo[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodInfo",
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>

<style scoped>
.goodInfo-title {
  margin: 10px 10px;
  font-size: 14px;
}
.goodInfo-price {
  margin: 0 10px;
}
.goodInfo-newPrice {
  margin: 0 5px 0 0;
  font-size: 20px;
  color: deeppink;
}
.goodInfo-oldPrice {
  font-size: 14px;
  text-decoration: line-through;
  margin: 0 5px 0 0;
}
.goodInfo-discount {
  border: 1px solid white;
  border-radius: 15px;
  color: white;
  background: rgb(255, 68, 102);
  padding: 1px 5px;
  font-size: 14px;
  position: relative;
  top: -5px;
}
.goodInfo-other {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
  font-size: 12px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 5px;
}
.goodInfo-other span {
  flex: 1;
}
.goodInfo-other span:nth-child(2) {
  text-align: center;
}
.goodInfo-other span:nth-child(3) {
  text-align: right;
}
.goodInfo-services {
  display: flex;
  margin: 10px 10px;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 3px solid #e5e5e5;
}
.goodInfo-services img {
  width: 12px;
  height: 12px;
}
.goodInfo-services span {
  font-size: 12px;
}
</style>
