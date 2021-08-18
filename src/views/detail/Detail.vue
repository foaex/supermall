<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      :probe-type="3"
      :pullUpLoad="true"
      class="content"
      ref="scroll"
      @scroll="contentScroll"
    >
      <!-- 轮播图 -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <deatail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></deatail-goods-info>
      <detail-params-info
        :paramInfo="paramsInfo"
        ref="params"
      ></detail-params-info>
      <comment :comment="comment" ref="comment"></comment>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom @addCart="addToCart"></detail-bottom>
    <back-top @click.native="backClick" v-show="isShow" />
    <!-- <detail-style
      :skuInfo="styleInfo"
      :shopingInfo="shopingInfo"
    ></detail-style> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DeatailGoodsInfo from "./childComps/DeatailGoodsInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import Comment from "./childComps/Comment.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import { itemListenerMixin, backTop } from "common/mixin";
import { debounce } from "common/util";
import DetailBottom from "./childComps/DetailBottom.vue";
// import DetailStyle from "./childComps/DetailStyle.vue";
import { mapActions } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      comment: {},
      recommends: [],
      themeTopYs: [],
      getTopY: null,
      buyStyle: false,
      // styleInfo: {},
      // shopingInfo: false,
    };
  },
  mixins: [itemListenerMixin, backTop],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DeatailGoodsInfo,
    DetailParamsInfo,
    Comment,
    GoodsList,
    DetailBottom,
    // DetailStyle,
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
      // console.log(data);
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo);
      // 4.创建详情信息
      this.detailInfo = data.detailInfo;
      // 5.尺码数据之类的
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.评论信息展示
      if (data.rate.cRate !== 0) {
        this.comment = data.rate.list[0];
      }
      // 7 获取各组件距离顶部的距离
      this.getTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 100);
    });
    // 求情推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {},
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      //获取Y值
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        //优化
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShow = -position.y > 1000 ? true : false;
    },
    // 选择商品样式
    addToCart() {
      // 自己添加的弹出窗
      // this.shopingInfo = true;
      //  1.获取购物车要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = parseInt(this.goods.realPrice).toFixed(2);
      product.iid = this.iid;
      this.addCart(product).then((res) => {
        // console.log(res);
        this.$toast.show(res, 1500);
      });
    },
  },
};
</script>

<style scoped >
.detail {
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 56px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.detail-nav {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}
</style>
