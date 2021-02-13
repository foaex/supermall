<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
	name: "Scroll",
	props: {
		probeType: {
			type: Number,
			default() {
				return 1;
			},
		},
	},
	data() {
		return {
			scroll: null,
		};
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper, {
			probeType: this.probeType,
			click: true,
		});
		this.scroll.on("scroll", (position) => {
			// console.log(position);
			this.$emit("scroll", position);
		});
	},
	methods: {
		scrollTo(x, y, time = 400) {
			this.scroll.scrollTo(x, y, time);
		},
	},
};
</script>

<style scoped>
/* .content {
	height: 100vh;
	overflow: hidden;
} */
</style>