<template>
  <div v-if="shopingInfo">
    <div class="shopbgc"></div>
    <div class="shop-info">
      <div class="style-title">
        <div class="title-info">
          <img :src="skuInfo.skus[0].img" alt="" />
          <p>{{ skuInfo.defaultPrice }}</p>
          <div class="exit"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailStyle",
  data() {
    return {};
  },
  props: {
    skuInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    shopingInfo: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  components: {},
  // created() {
  //   console.log(this.skuInfo);
  // },
  // mounted() {
  //   console.log(this.skuInfo);
  // },
};
</script>

<style scoped >
.shopbgc {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.shop-info {
  background-color: #fff;
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.style-title {
  position: relative;
  margin: 4px 0;
}

.title-info img {
  width: 50px;
  border-radius: 5px;
  float: left;
}
.title-info p {
  position: relative;
  float: left;
  top: 4px;
  left: 5px;
}
.exit {
  /* width: 40px; */
  height: 40px;
  position: relative;
}
.exit::before {
  position: absolute;
  right: 12px;
  top: 0;
  content: "";
  width: 15px;
  height: 15px;
  border-top: 1px solid black;
  transform: rotate(121deg);
  /* transform-origin: center; */
}
.exit::after {
  transform: rotate(328deg);
  position: absolute;
  right: 0;
  top: 0;
  content: "";
  width: 15px;
  height: 15px;
  /* transform-origin: center; */
  border-left: 1px solid black;
}
</style>
