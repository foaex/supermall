import { debounce } from './util'
import BackTop from "../components/content/backtop/BackTop.vue";
export const itemListenerMixin = {
    data() {
        return {
            itemImageListener: null
        }
    },
    mounted() {
        // 1.图片加载完成的事件监听
        const refresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImageListener = () => {
            refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImageListener)
            // console.log("混入内容")
    }
}
export const backTop = {
    components: {
        BackTop
    },
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
    },
}