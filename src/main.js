import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueCarousel from 'vue-carousel'
import YmapPlugin from 'vue-yandex-maps'

import './styles/style.scss'
import './styles/responsive.scss'

Vue.use(VueRouter)
Vue.use(VueCarousel)
Vue.use(YmapPlugin)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})	
