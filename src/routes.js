import VueRouter from 'vue-router'
import Modest from './pages/Modest.vue'

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Modest
		}
	],
	mode: 'history'
})