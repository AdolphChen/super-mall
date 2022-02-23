<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="nav-bar-center">购物街</div>
    </nav-bar>
    <tab-control
      class="tabControlFade"
      :title="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isFixed"
    ></tab-control>
    <bs-scroll
      class="content"
      ref="bsScroll"
      :probe-type="3"
      @scrollHeightListener="scrollListener"
      @pullUpload="loadMore"
      :pull-up-load="true"
    >
      <home-swiper :bannerList="banners" @swiperImgLoad="swiperImageLoad" />
      <home-recommend :recommendList="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
        :class="{ fixed: isFixed }"
      ></tab-control>
      <goods-list class="goods-list" :goods="showHomeGoods"></goods-list>
    </bs-scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackToTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import BsScroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "./childComponents/swiper";
import HomeRecommend from "./childComponents/recommend";

import { getHomeSwiper, getHomeGoods } from "../../network/home";
import { backTopMinix } from "../../common/minxs.js";
import FeatureView from "./childComponents/feature";
export default {
  components: {
    NavBar,
    BsScroll,
    TabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
  },
  name: "home",
  mixins: [backTopMinix],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabControlOffsetTop: 0,
      isFixed: false, //判断是否吸顶
      savePositionY: 0,
    };
  },
  created() {
    this.getSwiperData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.bsScroll.refresh, 100);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  computed: {
    showHomeGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    swiperImageLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 防抖函数  调用定时器 在一段时间只执行一次该函数
    debounce(fn, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    },
    loadMore() {
      this.getHomeGoods(this.currentType);

      this.$refs.bsScroll.scroll.refresh();
    },
    // 回到顶部 显示/隐藏

    // 回到顶部 点击

    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 网络请求
    getSwiperData() {
      getHomeSwiper().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 通过在data设置变量接受res.data.list
      // 通过page++的形式进行上拉加载更多
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        // 解构数组 进行push
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
      // 此时dom树还没有创建完成
      this.$nextTick(() => {
        // scroll.finishPullUp方法为需要在做完一次上拉加载后 必须调用 后续再调用才有效
        this.$refs.bsScroll.finishPullUp();
      });
    },
  },
  // 通过keep-alive的方式 记录首页滚动位置
  activated() {
    this.savePositionY = this.$refs.bsScroll.scroll.y;
    this.$refs.bsScroll.refresh();
  },
  deactivated() {
    this.savePositionY = this.$refs.bsScroll.scroll.y;
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.home-navbar {
  background: #ff5777;
  color: white;
  /* position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0; */
}
.tabControlFade {
  position: relative;
  z-index: 9;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 10;
} */
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* .content {
  height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden;
} */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
