<template>
  <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // props用来获取App.vue中的<tab-bar-item>中的定义的属性
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      // this.$route.path这个返回当前点击的路由
      // 判断当前路由是否包含this.path
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  data() {
    return {
      // isActive: true
    };
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "icomoon";
  src: url("~assets/fonts/icomoon.eot?ltzux8");
  src: url("~assets/fonts/icomoon.eot?ltzux8#iefix") format("embedded-opentype"),
    url("~assets/fonts/icomoon.ttf?ltzux8") format("truetype"),
    url("~assets/fonts/icomoon.woff?ltzux8") format("woff"),
    url("~assets/fonts/icomoon.svg?ltzux8#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.active {
  color: red;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  position: relative;
  font-size: 0.875rem;
}
.fonts {
  padding-top: 5px;
  font-size: 1rem;
  vertical-align: middle;
}
.item-one::before {
  content: "";
  font-family: "icomoon";
}
.item-two::before {
  content: "\e9bd";
  font-family: "icomoon";
}
.item-three::before {
  content: "";
  font-family: "icomoon";
}
.item-four::before {
  content: "";
  font-family: "icomoon";
}
</style>
