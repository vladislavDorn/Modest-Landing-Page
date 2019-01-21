import VueRouter from 'vue-router'
import StartPage from './pages/StartPage.vue'
import Modest from './pages/Modest.vue'

export default new VueRouter({
	routes: [
		{
			path: '',
			component: StartPage
		},
		{
			path: '/modest',
			component: Modest
		}
	],
	mode: 'history'
})