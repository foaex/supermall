import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
    //添加事务总线对象
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLazyLoad, {
        loading: require('./assets/img/detail/ganyu.png')
    })
    // 解决移动端300ms延迟问题
FastClick.attach(document.body)
new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')