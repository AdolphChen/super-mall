<template>
  <div>
    <nav-bar>
      <div slot="nav-bar-left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="backImg" />
      </div>
      <div slot="nav-bar-center" class="navBarCenter">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="navBarCentetItem"
          @click="navBarCentetItemClick(index)"
          :class="{ acitve: index === currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "",
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "详情", "点击", "推荐"],
      currentIndex: 0,
    };
  },
  mounted() {},
  methods: {
    navBarCentetItemClick(index) {
      this.currentIndex = index;
      this.$emit("detailNavBarClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
  activated() {
    this.currentIndex = 0;
  },
};
</script>

<style scoped>
.navBarCenter {
  display: flex;
  font-size: 13px;
}
.navBarCentetItem {
  flex: 1;
}
.acitve {
  color: red;
}
.backImg {
  margin-top: 12px;
}
</style>
