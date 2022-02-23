<template>
  <div class="content">
    <ul>
      <li>zhanshi1</li>
      <li>zhanshi2</li>
      <li>zhanshi3</li>
      <li>zhanshi4</li>
      <li>zhanshi5</li>
      <li>zhanshi6</li>
      <li>zhanshi7</li>
      <li>zhanshi8</li>
      <li>zhanshi9</li>
      <li>zhanshi10</li>
      <li>zhanshi11</li>
      <li>zhanshi12</li>
      <li>zhanshi13</li>
      <li>zhanshi14</li>
      <li>zhanshi15</li>
      <li>zhanshi16</li>
      <li>zhanshi17</li>
      <li>zhanshi18</li>

      <li>zhanshi25</li>
      <li>zhanshi26</li>
      <li>zhanshi27</li>
      <li>zhanshi28</li>
      <li>zhanshi29</li>
      <li>zhanshi30</li>
      <li>zhanshi31</li>
      <li>zhanshi32</li>
      <li>zhanshi33</li>
      <li>zhanshi34</li>
      <li>zhanshi35</li>
      <li>zhanshi36</li>
      <li>zhanshi37</li>
      <li>zhanshi38</li>
      <li>zhanshi39</li>
      <li>zhanshi40</li>
      <li>zhanshi100</li>
    </ul>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "",
  data() {
    return {
      scroll: null,
    };
  },
  components: {},
  mounted() {
    // 初始化bscroll
    this.scroll = new Bscroll(document.querySelector(".content"), {
      probeType: 3,
      pullUpLoad: true,
    });
    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    // 上拉加载更多 设置pullUpload为true  监听pullingUp事件
    // this.scroll.on("pullingUp", () => {});
  },
  methods: {},
};
</script>

<style scoped>
.content {
  height: 300px;
  background: red;
  overflow: hidden;
}
</style>
