import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// 300毫秒点击延迟解决方案
import fastClick from 'fastclick'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 统一不同浏览器的默认样式
import './assets/styles/reset.css'
// 1像素边框解决方案
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
