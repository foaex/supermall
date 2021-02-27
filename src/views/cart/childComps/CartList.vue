<template>
  <div class="cart-list">
    <scroll :probe-type="3" class="content" :pullUpLoad="true" ref="scroll">
      <cart-list-item
        v-for="(item, index) in list"
        :key="index"
        :itemInfo="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";
export default {
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters({
      list: "cartList",
    }),
  },
};
</script>

<style scoped >
.cart-list {
  height: 100%;
}
.content {
  overflow: hidden;
  height: 100%;
}
</style>
