import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userName: 'carleigh',
		themeColor: '#0049FF',
		initialLoad: true,
	},
	mutations: {
		updateThemeColor(state, color) {
			state.themeColor = color
		},
		updateUserName(state, name) {
			state.userName = name
		},
		setInitialLoad(state, value) {
			state.initialLoad = value
		}
	},
	actions: {

	},
	getters: {
		username: state => state.userName,
		theme: state => state.themeColor,
		initial: state => state.initialLoad,
	}
})
