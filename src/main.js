import Vue from 'vue'
import App from './App.vue'

// 300毫秒点击延迟解决方案
import fastClick from 'fastclick'

// 统一不同浏览器的默认样式
import './assets/styles/reset.css'

// 1像素边框解决方案
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  render: h => h(App)
}).$mount('#app')
