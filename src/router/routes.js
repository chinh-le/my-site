// import { i18n } from '@/plugins/i18n';
import { _appConfig } from '@/config';
import { _convertArrayToObject } from '@/utils/helpers';

const routesConfig = _convertArrayToObject(_appConfig.views, 'name');
// console.log('TLC: routesConfig', routesConfig);

// const routes = [
export default [
    {
        path: routesConfig.home.path,
        name: routesConfig.home.name,
        component: () => import(/* webpackChunkName: "ViewHome" */ `@/components/view/ViewHome`)
    },
    {
        path: routesConfig.about.path,
        name: routesConfig.about.name,
        /*
        KIM - lazy-loading / prefetching
            // route level code-splitting
            // this generates a separate chunk (ViewAbout.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
        */
        component: () => import(/* webpackChunkName: "ViewAbout" */ '@/components/view/ViewAbout')
    },
    {
        path: routesConfig.works.path,
        name: routesConfig.works.name,
        component: () => import(/* webpackChunkName: "ViewWorks" */ '@/components/view/ViewWorks')
    },
    {
        path: routesConfig.education.path,
        name: routesConfig.education.name,
        component: () => import(/* webpackChunkName: "ViewEducation" */ '@/components/view/ViewEducation')
    },
    {
        path: routesConfig.contact.path,
        name: routesConfig.contact.name,
        component: () => import(/* webpackChunkName: "ViewContact" */ '@/components/view/ViewContact')
    },
    {
        path: routesConfig.admin.path,
        name: routesConfig.admin.name,
        component: () => import(/* webpackChunkName: "ViewAdmin" */ '@/components/view/ViewAdmin')
    },
    {
        path: '*',
        redirect: { name: routesConfig.home.name }
    }
];

/* export {
    routes
}   */