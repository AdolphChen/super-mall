<template>
  <div class="cart-list-item">
    <!-- 选中状态按钮 空标签可能导致scroll失效-->

    <div class="item-checked">
      <checked-box
        :is-checked="listItem.checked"
        @click.native="checkedClick"
      />
    </div>
    <!-- 图片展示 -->
    <div class="item-info">
      <div class="item-image">
        <img :src="listItem.image" alt="" />
      </div>
      <div>
        <p class="item-title">{{ listItem.title }}</p>
        <p class="item-desc">{{ listItem.desc }}</p>
        <p class="item-price">
          <span style="color: red">
            {{ "¥" + listItem.price }}
          </span>
          <span>
            {{ "x" + listItem.count }}
          </span>
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedBox from "components/content/checkBox/checkBox";
export default {
  name: "",
  data() {
    return {
      isChecked: false,
    };
  },
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: { CheckedBox },
  mounted() {},
  methods: {
    checkedClick() {
      this.listItem.checked = !this.listItem.checked;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  border-bottom: 1px solid;
}
.CheckedBox {
  display: flex;
}
.item-info {
  display: flex;
}
.item-image img {
  width: 100px;
  height: 110px;
  margin: 5px;
}
.item-title,
.item-desc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 160px;
}
.item-title {
  margin: 5px 0 20px 0;
}
.item-desc {
  font-size: 14px;
  margin-bottom: 40px;
}

.item-price span:nth-child(1) {
  float: left;
  /* flex: 1; */
}
.item-price span:nth-child(2) {
  float: right;
  /* flex: 1; */
}
.item-checked {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
}
</style>
