import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "AppHome" */ '@/components/AppHome')
  },
  {
    path: '/about',
    name: 'about',
    /*
    KIM - lazy-loading / prefetching
      // route level code-splitting
      // this generates a separate chunk (AppAbout.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    */
    component: () => import(/* webpackChunkName: "AppAbout" */ '@/components/AppAbout')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import(/* webpackChunkName: "AppWorks" */ '@/components/AppWorks')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import(/* webpackChunkName: "AppEducation" */ '@/components/AppEducation')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "AppContact" */ '@/components/AppContact')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "AppAdmin" */ '@/components/AppAdmin')
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
