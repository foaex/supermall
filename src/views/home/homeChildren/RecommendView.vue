<template>
	<div class="recommend">
		<div
			v-for="(item, index) in recommends"
			:key="index"
			class="recommend-item"
		>
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<div>{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Recommend",
	props: {
		recommends: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>

<style scoped>
.recommend {
	display: flex;
	text-align: center;
	padding: 10px 0 20px;
	/* margin-bottom: 10px; */
	/* box-shadow: 0 5px 4px rgba(100, 100, 100, 0.2); */
	border-bottom: 10px solid #eee;
}
.recommend-item {
	flex: 1;
}
.recommend-item img {
	width: 80%;
	margin-bottom: 10px;
}
</style>