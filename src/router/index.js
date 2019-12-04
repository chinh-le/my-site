import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    /*
    KIM - lazy-loading / prefetching
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    */
    component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import(/* webpackChunkName: "works" */ '@/views/works/Works.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import(/* webpackChunkName: "services" */ '@/views/education/Education.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/contact/Contact.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/admin/Admin.vue')
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
