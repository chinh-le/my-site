import Vue from 'vue';
import VueRouter from 'vue-router';
import { appConfig } from '@/config';

Vue.use(VueRouter);

const routes = [
  {
    path: appConfig.views.home.path,
    name: appConfig.views.home.name,
    component: () => import(/* webpackChunkName: "ViewHome" */ `@/components/ViewHome`)
  },
  {
    path: appConfig.views.about.path,
    name: appConfig.views.about.name,
    /*
    KIM - lazy-loading / prefetching
      // route level code-splitting
      // this generates a separate chunk (ViewAbout.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    */
    component: () => import(/* webpackChunkName: "ViewAbout" */ '@/components/ViewAbout')
  },
  {
    path: appConfig.views.works.path,
    name: appConfig.views.works.name,
    component: () => import(/* webpackChunkName: "ViewWorks" */ '@/components/ViewWorks')
  },
  {
    path: appConfig.views.education.path,
    name: appConfig.views.education.name,
    component: () => import(/* webpackChunkName: "ViewEducation" */ '@/components/ViewEducation')
  },
  {
    path: appConfig.views.contact.path,
    name: appConfig.views.contact.name,
    component: () => import(/* webpackChunkName: "ViewContact" */ '@/components/ViewContact')
  },
  {
    path: appConfig.views.admin.name,
    name: appConfig.views.admin.name,
    component: () => import(/* webpackChunkName: "ViewAdmin" */ '@/components/ViewAdmin')
  },
  {
    path: '*',
    redirect: { name: appConfig.views.home.name }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
