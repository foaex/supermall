<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar-item></main-tab-bar-item>
  </div>
</template>
<script>
import MainTabBarItem from "components/content/MainTabBarItem/MainTabBarItem";
export default {
  name: "App",
  components: {
    MainTabBarItem,
  },
};
</script>
<style scoped>
@import "assets/css/base.css";
</style>
