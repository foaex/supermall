<template>
  <div class="wrapper"
       ref="wrapper">
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
      default () {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default () {
        return false;
      },
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      scroll: null,
    };
  },
  mounted () {
    setTimeout(this._initScroll, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) return
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
        useTransition: false,
      });
      // 2.监听滚动的位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (position) => {
          // console.log(position);
          this.$emit("scroll", position);
        });
      }
      if (this.pullUpLoad) {
        // 监听上拉加载
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        })
      }
    },
    scrollTo (x, y, time = 400) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh () {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY () {
      return this.scroll ? this.scroll.y : 0;
    },
  }
};
</script>

<style scoped>

</style>