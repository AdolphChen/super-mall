<template>
  <div v-if="Object.keys(goodSizeInfo).length !== 0">
    <table
      class="detail-good-size"
      v-for="(tables, index) in goodSizeInfo.rule.tables"
      :key="tables + index + 1"
    >
      <tr v-for="(item, index) in tables" :key="item + index + 2">
        <td v-for="(td, indey) in item" :key="td + indey">{{ td }}</td>
      </tr>
    </table>
    <table class="detail-good-shop">
      <tr
        v-for="(item, index) in goodSizeInfo.info.set"
        :key="item + index + 3"
      >
        <td>{{ item.key }}</td>
        <td class="item-purple">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodSizeInfo: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.detail-good-size {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  margin-bottom: 10px;
}
.detail-good-size tr {
  text-indent: 10px;
  height: 30px;
}
.detail-good-size tr td {
  border-bottom: 1px solid #c1c1c1;
}
.detail-good-shop {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}
.detail-good-shop tr {
  text-indent: 10px;
  /* border: 1px solid red; */
  height: 40px;
  text-align: left;
}
.detail-good-shop tr td:nth-child(1) {
  border: 1px solid #c1c1c1;
  border-right: none;
  border-left: none;
  width: 15%;
}
.detail-good-shop tr td {
  border: 1px solid #c1c1c1;
  border-right: none;
  border-left: none;
}
.item-purple {
  color: deeppink;
}
</style>
