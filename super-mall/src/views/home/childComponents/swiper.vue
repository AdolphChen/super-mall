<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in bannerList" :key="index">
      <a :href="item.link">
        <img
          :src="item.image"
          :style="{ width: item.width }"
          alt=""
          @load="swiperImgLoad"
        />
      </a>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    bannerList: [],
  },
  name: "",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },
      isLoad: false,
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    // 判断轮播图图片加载完成 tabControl吸顶
    swiperImgLoad() {
      // 通过取反该属性 使轮播图方法只调用一次
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 180px;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
</style>
