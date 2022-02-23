<template>
  <div class="cart">
    <!-- 购物车导航 -->
    <nav-bar>
      <div class="cart-nav-bar" slot="nav-bar-center">
        购物车({{ cartCount }})
      </div>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list />
    <!--  -->
    <cart-bottom />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComponent/cartList";
import CartBottom from "./childComponent/cartBottom";
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottom,
  },
  mounted() {},
  methods: {},
  computed: {
    // cartLength() {
    //   return this.$store.state.productList.length;
    // },
    ...mapGetters(["cartCount"]),
  },
};
</script>

<style scoped>
.cart {
  position: relative;
  height: calc(100vh - 40px);
}
.nav-bar {
  background: #ff5777;
}
.cart-nav-bar {
  color: white;
  text-align: center;
}
</style>
