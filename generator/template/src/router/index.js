import Vue from 'vue';
import Router from 'vue-router';
const home = require('../views/home/home.vue')
import { scrollBehavior } from '@/lib/default-scroll-behavior'
import routes from './routes.json'
const components = {
  home,
  'contact-us': () => import(/*webpackChunkName: 'contact-us'*/ '../views/contact-us.vue'),
  'about-us': () => import('../views/about.vue')
}

Vue.use(Router);

export default new Router({
  scrollBehavior,
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.map((r) => ({ ...r, component: components[r] }))
});