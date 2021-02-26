<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick" class="Back">
        <div class="back"></div>
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: { NavBar },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped >
.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
.back {
  width: 12px;
  height: 12px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  transform: rotate(45deg);
  position: absolute;
  top: 15px;
  left: 30px;
}
.Back {
  position: relative;
}
</style>
