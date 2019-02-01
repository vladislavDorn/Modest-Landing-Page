import VueRouter from 'vue-router'
import Modest from './pages/Modest.vue'
import ModestRU from './pages/ModestRU.vue'

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Modest
		},
		{
			path: '/modest-ru',
			component: ModestRU
		}
	],
	mode: 'history'
})