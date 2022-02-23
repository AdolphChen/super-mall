<template>
  <div class="tab-control">
    <!-- 根据下标判断当前状态是否为激活状态 -->
    <div
      class="tab-control-item"
      v-for="(item, index) in title"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="tabItemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {},
  mounted() {},
  methods: {
    tabItemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  background: #fff;
  text-align: center;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
  line-height: 40px;
  height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: deeppink;
}
.active span {
  border-bottom: 5px solid deeppink;
}
</style>
