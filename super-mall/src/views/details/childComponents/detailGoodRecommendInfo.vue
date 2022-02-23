<template>
  <div v-if="Object.keys(goodRecommend).length !== 0">
    <div class="desc">{{ goodRecommend.desc }}</div>
    <div>{{ goodRecommend.detailImage[0].key }}</div>
    <div
      class="imageList"
      v-for="(item, index) in goodRecommend.detailImage[0].list"
      :key="index + item"
    >
      <img @load="imageLoad" :src="item" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodRecommend: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      imageLength: 0,
      imageArrLength: 0,
    };
  },
  methods: {
    imageLoad() {
      this.imageLength++;
      // 所有图片加载完了 回调刷新better-scorll
      if (this.imageLength === this.imageArrLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch: {
    goodRecommend() {
      this.imageArrLength = this.goodRecommend.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.imageList img {
  width: 100%;
}
</style>
