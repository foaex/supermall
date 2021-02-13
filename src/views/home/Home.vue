<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<scroll
			class="content"
			ref="scroll"
			:probe-type="3"
			@scroll="contentScroll"
		>
			<home-children :banners="banners" />
			<recommend-view :recommends="recommends" />
			<featrue></featrue>
			<tab-control
				:title="['流行', '新品', '精选']"
				class="tab-control"
				@tabClick="tabClick"
			/>
			<goods-list :goods="showGoods" />
		</scroll>
		<back-top @click.native="backClick" v-show="isShow" />
	</div>
</template>

<script >
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "network/home";
import HomeChildren from "./homeChildren/HomeChildren.vue";
import RecommendView from "./homeChildren/RecommendView.vue";
import Featrue from "./homeChildren/Featrue.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";

export default {
	name: "Home",
	components: {
		NavBar,
		HomeChildren,
		RecommendView,
		Featrue,
		TabControl,
		GoodsList,
		Scroll,
		BackTop,
	},
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
				pop: {
					page: 0,
					list: [],
				},
				new: {
					page: 0,
					list: [],
				},
				sell: {
					page: 0,
					list: [],
				},
			},
			currentType: "pop",
			isShow: false,
		};
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		},
	},
	created() {
		// 1 调用方法
		this.getHomeMultidata();
		this.getHomeGoods("pop");
		this.getHomeGoods("new");
		this.getHomeGoods("sell");
	},
	methods: {
		tabClick(index) {
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
		backClick() {
			this.$refs.scroll.scrollTo(0, 0);
		},
		contentScroll(position) {
			this.isShow = -position.y > 1000 ? true : false;
		},
		getHomeMultidata() {
			// 1.请求多个数据
			// 函数执行过后，所有的数据都会被清除，所以要把数据保存起来
			getHomeMultidata().then((res) => {
				this.banners = res.data.banner.list;
				console.log(this.banners);
				this.recommends = res.data.recommend.list;
			});
		},
		getHomeGoods(type) {
			// 2 请求商品数据
			const page = this.goods[type].page + 1;
			getHomeGoods(type, page).then((res) => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
			});
		},
	},
};
</script>

<style scoped>
#home {
	/* padding-top: 44px; */
	height: 100vh;
	position: relative;
	/* overflow: hidden; */
}
.home-nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: #ff8198;
	color: #fff;
	z-index: 9;
}
.tab-control {
	position: sticky;
	top: 44px;
	z-index: 9;
}
.content {
	overflow: hidden;
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
}
</style>
