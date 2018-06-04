import Vue from 'vue'
import App from './App.vue'
import Toaster from './Toaster.vue'

Vue.component('Toaster', Toaster)
new Vue({
  el: '#app',
  render: h => h(App)
})
