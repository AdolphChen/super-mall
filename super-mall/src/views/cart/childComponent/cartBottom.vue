<template>
  <div>
    <div class="cartBottom">
      <div class="checkContent">
        <checked-box class="checkBox" />
        <span>全选</span>
      </div>
      <div class="totalPrice">总计:{{ totalPrice }}</div>
      <div class="calc">共计算:</div>
    </div>
  </div>
</template>

<script>
import CheckedBox from "components/content/checkBox/checkBox";

export default {
  name: "",

  data() {
    return {
      totalPrice: null,
    };
  },
  components: { CheckedBox },
  mounted() {
    this.totalPrice = this.getTotalPrice();
    console.log(this.totalPrice);
  },
  computed: {
    // totalPrice() {
    //   return this.$store.state.productList
    //     .filter((item) => {
    //       return item.checked;
    //     })
    //     .reduce((preValue, item) => {
    //       return preValue + item.price * item.count;
    //     });
    // },
  },
  methods: {
    getTotalPrice() {
      return this.$store.state.productList
        .filter((item) => {
          return item.checked;
        })
        .reduce((prev, item) => {
          return prev + item.price * item.price;
        });
    },
  },
};
</script>

<style scoped>
.cartBottom {
  position: relative;
  bottom: 40px;
  background: #eee;
  height: 40px;
  line-height: 40px;
}
.checkContent {
  display: flex;
  height: 40px;
  line-height: 40px;
  align-items: center;
}
.cartBottom {
  position: relative;
  display: flex;
  bottom: 40px;
  height: 40px;
}

.checkBox {
  width: 22px;
  height: 22px;
}
.totalPrice {
  flex: 1;
  text-align: center;
}
.calc {
  width: 90px;
}
</style>
