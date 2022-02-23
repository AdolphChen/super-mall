<template>
  <div class="goods-list-item" @click="goodsDetails">
    <img :src="showImg" alt="" @load="imgload" />
    <div class="goods-list-item-inner">
      <p class="goods-list-item-title">{{ goodsItem.title }}</p>
      <p>
        <span class="price">¥{{ goodsItem.price }}</span>
        <span class="collect">
          <img src="~assets/img/common/collect.svg" alt="" />
          {{ goodsItem.cfav }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodsItem: {
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
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imgload() {
      this.$bus.$emit("itemImageLoad");
    },
    goodsDetails() {
      if (this.goodsItem.iid) {
        this.$router.push("/detail/" + this.goodsItem.iid);
      } else {
        this.$router.push("/detail/" + this.goodsItem.item_id);
      }
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  text-align: center;
  position: relative;
  padding-bottom: 40px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-list-item-inner {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  font-size: 12px;
}
.goods-list-item-inner p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  /* margin-bottom: 3px; */
}
.price {
  color: deeppink;
  margin-right: 10px;
}
/* .collect::before {
  content: "";
  position: absolute;
  left: 90px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
} */
.collect img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
</style>
