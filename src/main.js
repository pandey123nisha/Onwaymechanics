import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuesax from 'vuesax'
import VModal from 'vue-js-modal'

  import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax)
  Vue.use(VModal)
  
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
