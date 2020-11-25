import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});

export const bus = new Vue();
// import globally
// import Ninjas from './Ninjas.vue'

// Vue.component('ninjas', Ninjas);
new Vue({
  el: '#app',
  render: h => h(App)
})
