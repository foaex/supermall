import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
    //添加事务总线对象
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')