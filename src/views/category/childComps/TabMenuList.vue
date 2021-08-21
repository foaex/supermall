<template>
  <div class="container" v-if="subcategories.list">
    <!-- 每一个数据项 -->
    <a class="container_item"  v-for="(item,index) in subcategories.list" :key="index" :href="item.link">
      <!-- 照片 -->
      <div class="container_item_img">
        <img :src="item.image">
      </div>
      <!-- 文字 -->
      <div class="container_item_text">
        <span>{{item.title}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  components: {

  },
  props: {
    subcategories: {
      type: Object,
      default () {
        return []
      }
    }
  },
}
</script>

<style scoped >
.container {
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
}
.container_item{
  display: flex;
  width: 31%;
  height: 6.25rem;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 5px;
  margin-left: 5px;
}
.container_item_img{
  width: 100%;
  height: 100%;
}
.container_item_img>img{
  width: 80%;
  height: 80%;
}
.container_item_text>span{
  font-size: 14px;
}
</style>
