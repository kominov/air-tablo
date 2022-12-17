import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const queryTo = to.query;
  const queryFrom = from.query;

  queryTo?.session === 'admin'
    && store.commit('onSetAdmin', true);

  queryFrom?.session === 'admin'
    && store.commit('onSetAdmin', false);
  next();
});

export default router;
