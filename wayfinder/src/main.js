import Vue from 'vue'
import App from './App.vue'
import store from './vuex'
import vuetify from './plugins/vuetify'
import './styles/main.scss'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
