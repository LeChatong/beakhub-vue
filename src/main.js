import Vue from 'vue'
import DashboardPlugin from './plugins/dashboard-plugin'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false;

Vue.use(DashboardPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
