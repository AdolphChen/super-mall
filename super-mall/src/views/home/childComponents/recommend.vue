<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommendList"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
    <!-- {{ recommendList }} -->
  </div>
</template>

<script>
export default {
  name: "home-recommend",
  data() {
    return {};
  },
  props: {
    recommendList: [],
  },
  components: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 15px 0 20px 0;
  border-bottom: 10px solid #f3f3f3;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
  vertical-align: middle;
}
</style>
