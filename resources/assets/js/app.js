import 'bootstrap';

import VueRouter from 'vue-router';
import vbclass from 'vue-body-class';
import TableComponent from 'vue-table-component';
import VueCharts from 'vue-chartjs';

import routes from './routes';
import './bootstrap';
import './components';


const router = new VueRouter({
  routes,
  linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

router.afterEach((to, from) => {
  // ...
})


Vue.use(VueRouter);
Vue.use(vbclass, router);
Vue.use(TableComponent);


const app = new Vue({
  router
}).$mount('#app')
