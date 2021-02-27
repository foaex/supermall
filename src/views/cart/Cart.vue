<template>
  <div class="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <div v-if="length == 0" class="none">您的购物车没有东西,快去选购吧!</div>
    <!-- <div >22222</div> -->
    <div v-else class="show">
      <cart-list></cart-list>
    </div>
    <div class="showButton">
      <bottom-bar class="showButton-item"></bottom-bar>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList.vue";
import BottomBar from "./childComps/BottomBar.vue";
export default {
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
  name: "Cart",
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.show {
  height: calc(100% - 44px - 49px - 40px);
}
.cart-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 600;
}
.none {
  padding-top: 40px;
  text-align: center;
  font-size: 38px;
  color: black;
  opacity: 0.2;
}
.showButton {
  position: absolute;
  bottom: 49px;
  width: 100%;
  height: 40px;
}
/* .showButton-item {
  
} */
</style>
