<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="cateList"></tab-menu>
      
    </div>
  </div>
</template>

<script>
import { getCategory, getSubcategory } from "network/category"
// import Scroll from "components/common/scroll/Scroll.vue"
import NavBar from 'components/common/navbar/NavBar'
import TabMenu from './childComps/TabMenu'
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu
  },
  data () {
    return {
      // 保存分类商品数据
      cateList: []
    }
  },

  created () {
    this.getCategory()
    this.getSubcategory()
  },
  methods: {
    getCategory () {
      getCategory().then(res => {
        console.log(res);
        this.cateList = res.data.category.list
        console.log(this.cateList)
      })
    },
    getSubcategory () {
      getSubcategory(3627).then(res => {
        console.log(res)
      })
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  overflow: hidden;
}
.category {
  width: 100%;
  height: 100vh;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
</style>
