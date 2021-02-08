<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-children :banners="banners" />
		<!-- <ul>
			<li v-for="(item, index) in banners" :key="index">{{ item }}</li>
		</ul> -->
	</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeChildren from "./homeChildren/HomeChildren.vue";

export default {
	name: "Home",
	components: {
		NavBar,
		HomeChildren,
	},
	data() {
		return {
			banners: [],
			recommends: [],
		};
	},
	created() {
		// 1.请求多个数据
		// 函数执行过后，所有的数据都会被清除，所以要把数据保存起来
		getHomeMultidata().then((res) => {
			this.banners = res.data.banner.list;
			console.log(this.banners);
			this.recommends = res.data.recommend.list;
		});
	},
};
</script>

<style>
.home-nav {
	background-color: #ff8198;
	color: #fff;
}
</style>
