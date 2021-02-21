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
		pullUpLoad:{
			type:Boolean,
			default(){
				return false
			}
		}
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
			pullUpLoad:this.pullUpLoad
		});
		// 监听滚动
		this.scroll.on("scroll", (position) => {
			// console.log(position);
			this.$emit("scroll", position);
		});
		if(this.pullUpLoad){
			// 监听上拉加载
		this.scroll.on('pullingUp',()=>{
			this.$emit('pullingUp')
		})
		}
			// console.log(this.scroll);

	},
	methods: {
		scrollTo(x, y, time = 400) {
			this.scroll.scrollTo(x, y, time);
		},
		refresh() {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
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