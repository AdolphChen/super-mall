<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  // 封装一层Bscroll
  name: "",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  components: {},
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // 如果设置dom元素高度以后 仍无法滚动 添加以下options
      observeDOM: true,
      click: true,
    });
    // 监听scroll 判断滚动高度
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollHeightListener", position);
    });
    // this.scroll.on("pullingUp", () => {
    //   this.$emit("pullUpload");
    // });
  },
  methods: {
    // 回到顶部方法
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 上拉加载
    pullingUpload() {
      this.scroll && this.scroll.pulling();
      this.scroll && this.scroll.finish();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped></style>
