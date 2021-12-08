<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="nav-bar-center">购物街</div>
    </nav-bar>
    <swiper></swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeSwiper } from "../../network/home";
import Swiper from "views/home/childSwiper/swiper";
export default {
  name: "",
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  components: { NavBar, Swiper },
  mounted() {},
  methods: {
    getSwiperData() {
      getHomeSwiper().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        console.log(res.data);
      });
    },
  },
  created() {
    this.getSwiperData();
  },
};
</script>

<style scoped>
.home-navbar {
  background: #ff5777;
  color: white;
}
</style>
