<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories"
                @selectItem="selectItem"></tab-menu>
      <!-- 右侧展示数据 可滚动区域 -->
      <scroll id="tab-content"
              :data="[categoryData]">
        <div class="tab-menu-list">
          <tab-menu-list :subcategories="showSubcategory"></tab-menu-list>
          <TabControl :title="['综合', '新品', '销量']"
                      @tabClick="tabClick"></TabControl>
          <TabControlGoods :goodsList='showCategoryDetail'/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import { getCategory, getSubcategory, getCategoryDetail } from "network/category"
import Scroll from "components/common/scroll/Scroll.vue"
import NavBar from 'components/common/navbar/NavBar'
import TabMenu from './childComps/TabMenu'
import TabMenuList from './childComps/TabMenuList.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import TabControlGoods from './childComps/TabControlGoods.vue'
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabMenuList,
    TabControl,
    TabControlGoods
  },
  data () {
    return {
      categories: [],
      categoryData: {
      },
      currentIndex: -1,
      currentType: 'pop'
    }
  },
  created () {
    this._getCategory()
  },
  methods: {
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    _getCategory () {
      getCategory().then(res => {
        // 1.获取分类数据
        // console.log(res)
        this.categories = res.data.category.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0)
      })
    },
    _getSubcategories (index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = { ...this.categoryData }
        this._getCategoryDetail('pop')
        this._getCategoryDetail('sell')
        this._getCategoryDetail('new')
      })
    },
    _getCategoryDetail (type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = { ...this.categoryData }
      })
    },
    /**
     * 事件响应相关的方法
     */
    selectItem (index) {
      this._getSubcategories(index)
    }
  },
  watch: {
    currentIndex (val) {
      this.currentIndex = val
    }
  },
  computed: {
    showSubcategory () {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail () {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },

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
#tab-content {
  height: 100%;
  flex: 1;
  overflow: hidden;
}
/* .tab-menu-list{
  display: flex;
  height: 80%;
  flex: 1;
  overflow: hidden;
} */
</style>
