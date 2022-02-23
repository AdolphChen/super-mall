<template>
  <div id="details">
    <deatil-nav-bar @detailNavBarClick="detailNavBarClick" ref="detailNavbar" />
    <bs-scroll
      class="content"
      ref="bsScroll"
      :probe-type="3"
      @scrollHeightListener="scrollHeightListener"
    >
      <detail-swiper :detailSwiper="detailSwiper" />
      <detail-good-info :goodInfo="goodInfo" />
      <detail-good-shop-info :goodShopInfo="goodShopInfo" />
      <detail-good-recommend-info
        ref="goodsInfo"
        :goodRecommend="goodRecommend"
        @imageLoad="imageLoad"
      />
      <detail-good-size ref="goodsSize" :goodSizeInfo="goodSizeInfo" />
      <goods-list ref="goodsRecommend" :goods="goodsDetailRecommend" />
    </bs-scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top @click.native="backTopClick" v-show="isShowBackToTop" />
  </div>
</template>

<script>
// probeType 控制是否监听检测
import DeatilNavBar from "./childComponents/detailNavBar";
import DetailSwiper from "./childComponents/detailSwiper";
import DetailGoodInfo from "./childComponents/detailGoodInfo";
import DetailGoodShopInfo from "./childComponents/detailGoodShopInfo";
import DetailGoodRecommendInfo from "./childComponents/detailGoodRecommendInfo";
import DetailGoodSize from "./childComponents/detailGoodSize";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childComponents/detailBottomBar.vue";
import BsScroll from "components/common/scroll/Scroll";

import { backTopMinix } from "../../common/minxs.js";

import {
  getDetails,
  goodsInfo,
  goodShopInfo,
  goodSizeInfo,
  recommend,
} from "../../network/detail.js";
export default {
  mixins: [backTopMinix],
  name: "detail",
  data() {
    return {
      iid: null,
      detailSwiper: [],
      goodInfo: {},
      goodShopInfo: {},
      goodRecommend: {},
      goodSizeInfo: {},
      goodsDetailRecommend: [],
      domOffsetTop: [], //获取dom元素 offsetTop高度 便于点击滚动到正确位置
      currentIndex: null,
    };
  },
  components: {
    DeatilNavBar,
    DetailSwiper,
    DetailGoodInfo,
    DetailGoodShopInfo,
    DetailGoodRecommendInfo,
    BsScroll,
    DetailGoodSize,
    GoodsList,
    DetailBottomBar,
  },
  updated() {
    console.log(this.$store.state.productList, "store");
  },
  created() {
    this.iid = this.$route.params.iid;
    // 详情页推荐
    recommend().then((res) => {
      this.goodsDetailRecommend = res.data.list;
    });
    getDetails(this.iid).then((res) => {
      const data = res.result;
      this.detailSwiper = data.itemInfo.topImages;
      this.goodInfo = new goodsInfo(
        data.columns,
        data.itemInfo,
        data.shopInfo.services
      );
      // 商店信息
      this.goodShopInfo = new goodShopInfo(data.shopInfo);
      // 商品图片信息
      this.goodRecommend = data.detailInfo;
      //
      this.goodSizeInfo = new goodSizeInfo(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
  mounted() {},
  methods: {
    //点击添加购物车
    addCart() {
      const product = {};
      product.image = this.detailSwiper[0];
      product.title = this.goodInfo.title;
      product.desc = this.goodInfo.desc;
      product.price = this.goodInfo.realPrice;
      product.iid = this.goodInfo.iid;
      product.count = 0;
      //  修改mutations方法用commit
      // this.$store.commit("addCart", product);
      // 修改actions方法用dispatch 派发
      this.$store.dispatch("addToCart", product);
    },
    imageLoad() {
      this.$refs.bsScroll.refresh();
      this.domOffsetTop.push(0);
      this.domOffsetTop.push(this.$refs.goodsInfo.$el.offsetTop);
      this.domOffsetTop.push(this.$refs.goodsSize.$el.offsetTop);
      this.domOffsetTop.push(this.$refs.goodsRecommend.$el.offsetTop);
    },
    detailNavBarClick(index) {
      // 点击滚动到对应高度
      this.$refs.bsScroll.scrollTo(0, -this.domOffsetTop[index], 500);
    },
    // 判断滚动高度 然后随着滚动高度 navbar的index进行切换
    scrollHeightListener(position) {
      let positionY = -position.y;
      let length = this.domOffsetTop.length;
      // for in里面的i 是字符串类型
      for (let i in this.domOffsetTop) {
        i = i * 1;

        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY > this.domOffsetTop[i] &&
            positionY < this.domOffsetTop[i + 1]) ||
          (i === length - 1 && positionY > this.domOffsetTop[i])
        ) {
          this.currentIndex = i;
          this.$refs.detailNavbar.currentIndex = this.currentIndex;
        }
        this.isShowBackToTop = -position.y > 1000;
      }
    },
  },
};
</script>

<style scoped>
#details {
  position: relative;
  z-index: 10;
  background: #fff;
  height: 100vh;
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
