/*import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')*/

/*import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { currency } from './components/currency'

Vue.config.productionTip = false
Vue.filter('currency', currency)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})*/

import Vue from 'vue'
import App from './App.vue'
import store from './store'
//import { getAllMessages } from './store/actions'

Vue.config.debug = true

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

getAllMessages(store)