<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll :probe-type="3" :pullUpLoad="true" class="content">
      <!-- 轮播图 -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import { getDetail, Goods, Shop } from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
// import Scroll from "components/common/scroll/Scroll.vue";
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
  },
  created() {
    // console.log(this.$route);
    // 1 拿到点击商品的id
    this.iid = this.$route.params.iid;
    // 根据id来获取相应的商品信息
    getDetail(this.iid).then((res) => {
      // console.log(result);
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo);
    });
  },
  mounted() {},
};
</script>

<style scoped >
#detail {
  position: relative;
}
.content {
  height: 100vh;
}
.detail-nav {
  position: relative;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #fff;
}
</style>
