import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DashboardPlugin from './plugins/dashboard-plugin'

Vue.config.productionTip = false;

Vue.use(DashboardPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
