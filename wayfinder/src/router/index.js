import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../components/LandingPage'
import ApiPage from '../components/ApiPage'
import CustomColorPage from '../components/CustomColor'
import PicturePage from '../components/Pictures'

Vue.use(Router)

let allRoutes = [{
	path: '/Landing',
	name: 'Landing',
	component: LandingPage
},{
	path: '/API',
	name: 'API',
	component: ApiPage
},{
	path: '/ChangeThemeColor',
	name: 'ChangeThemeColor',
	component: CustomColorPage
},{
	path: '/Sponsors',
	name: 'Sponsors',
	component: PicturePage
}]

let routes = [...allRoutes]

let router = new Router({
	mode: 'history',
	routes: routes
})

export default router
