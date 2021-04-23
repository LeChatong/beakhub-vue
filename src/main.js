import './assets/js/core/jquery.min.js'
import './assets/js/core/popper.min.js'
//import './assets/js/core/bootstrap-material-design.min.js'
//import './assets/js/plugins/perfect-scrollbar.jquery.min.js'
//import './assets/js/material-dashboard.js?v=2.1.2'
import './assets/demo/demo.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
