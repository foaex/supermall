<template>
	<div class="container">
		<GoodsListItem v-for="(item,index) in goodsList" :key="index" :goodsItem="item"/>
	</div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem.vue'
export default {
	data() {
		return {

		}
	},
	components: {
		GoodsListItem
	},
	props:['goodsList']
}
</script>

<style scoped >
.container{
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
</style>
