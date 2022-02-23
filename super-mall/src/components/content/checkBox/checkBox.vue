<template>
  <div class="checkBox" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
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
.checkBox {
  /* border: 2px solid red; */
  width: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;
  background: white;
}

.check {
  background: red;
  border: 1px solid red;
  position: relative;
}
.check img {
  position: relative;
  top: 1px;
  left: 1px;
}
</style>
