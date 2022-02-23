import BackTop from "components/content/backTop/BackTop";
import BsScroll from "components/common/scroll/Scroll";

export const backTopMinix = {
  components: { BackTop, BsScroll },
  data() {
    return {
      isShowBackToTop: false,
    };
  },
  methods: {
    backTopClick() {
      this.$refs.bsScroll.scrollTo(0, 0);
    },
    scrollListener(position) {
      this.isShowBackToTop = -position.y > 1000;

      this.isFixed = -position.y > this.tabControlOffsetTop;
    },
  },
};
