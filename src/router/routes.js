import { _appConfig } from '@/config';
import { _convertArrayToObject } from '@/utils/helpers';

const routesConfig = _convertArrayToObject(_appConfig.views, 'name');
// console.log('TLC: routesConfig', routesConfig);

export default [
    {
        path: routesConfig.home.path,
        name: routesConfig.home.name,
        component: () => import(/* webpackChunkName: "ViewHome" */ `@/components/view/ViewHome`),
        meta: {
            title: `${routesConfig.home.title} | ${_appConfig.appName}`
        }
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
        component: () => import(/* webpackChunkName: "ViewAbout" */ '@/components/view/ViewAbout'),
        meta: {
            title: `${routesConfig.about.title} | ${_appConfig.appName}`
        }
    },
    {
        path: routesConfig.works.path,
        name: routesConfig.works.name,
        component: () => import(/* webpackChunkName: "ViewWorks" */ '@/components/view/ViewWorks'),
        meta: {
            title: `${routesConfig.works.title} | ${_appConfig.appName}`
        }
    },
    {
        path: routesConfig.education.path,
        name: routesConfig.education.name,
        component: () => import(/* webpackChunkName: "ViewEducation" */ '@/components/view/ViewEducation'),
        meta: {
            title: `${routesConfig.education.title} | ${_appConfig.appName}`
        }
    },
    {
        path: routesConfig.contact.path,
        name: routesConfig.contact.name,
        component: () => import(/* webpackChunkName: "ViewContact" */ '@/components/view/ViewContact'),
        meta: {
            title: `${routesConfig.contact.title} | ${_appConfig.appName}`
        }
    },
    {
        path: routesConfig.admin.path,
        name: routesConfig.admin.name,
        component: () => import(/* webpackChunkName: "ViewAdmin" */ '@/components/view/ViewAdmin'),
        meta: {
            title: `${routesConfig.admin.title} | ${_appConfig.appName}`
        },
        // admin route cannot be accessed directly from url, to ensure the store uid is available thus allowing only user with admin rights (uid) can have access (see watch: uid in AppNavigateLinks and AppNavigateLinksSidebar)
        beforeEnter (to, from, next) {
            if (from.name) {
                next();
            } else {
                next({ name: routesConfig.home.name });
            }
        }
    },
    {
        path: '*',
        redirect: { name: routesConfig.home.name }
    }
];
