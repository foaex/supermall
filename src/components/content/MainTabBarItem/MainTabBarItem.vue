<template>
	<tab-bar>
		<tab-bar-item path="/home">
			<template v-slot:item-icon>
				<div>
					<div class="fonts item-one"></div>
					<div>首页</div>
				</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/category">
			<template v-slot:item-icon>
				<div>
					<div class="fonts item-two"></div>
					<div>分类</div>
				</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/cart">
			<template v-slot:item-icon>
				<div>
					<div class="fonts item-three"></div>
					<div>购物车</div>
				</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/profile">
			<template v-slot:item-icon>
				<div>
					<div class="fonts item-four"></div>
					<div>我的</div>
				</div>
			</template>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
	name: "MainTabBarItem",
	components: {
		TabBar,
		TabBarItem,
	},
};
</script>

<style>
</style>
