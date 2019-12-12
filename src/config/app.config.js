export const appConfig = {
    recaptchaSiteKey: process.env.VUE_APP_GOOGLE_RECAPTCHA_SITEKEY, // v3 site key (frontend)
    appAuthenticationType: process.env.VUE_APP_AUTHENTICATION_TYPE,
    appResumePath: process.env.VUE_APP_RESUME_PATH,
    appDefaultEmail: process.env.VUE_APP_DEFAULT_EMAIL,
    appDefaultPassword: process.env.VUE_APP_DEFAULT_PASSWORD,
    views: [
        {
            order: 4,
            name: 'home',
            path: '/',
            class: 'link-home',
            title: 'home',
            componentName: 'AppHome'
        },
        {
            order: 1,
            name: 'about',
            path: '/about',
            class: 'link-about',
            title: 'about',
            componentName: 'AppAbout'
        },
        {
            order: 3,
            name: 'works',
            path: '/works',
            class: 'link-works',
            title: 'works',
            componentName: 'AppWorks'
        },
        {
            order: 1,
            name: 'education',
            path: '/education',
            class: 'link-education',
            title: 'education',
            componentName: 'AppEducation'
        },
        {
            order: 6,
            name: 'contact',
            path: '/contact',
            class: 'link-contact',
            title: 'contact',
            componentName: 'AppContact'
        },
        {
            order: 7,
            name: 'admin',
            path: '/admin',
            class: 'link-admin',
            title: 'admin',
            componentName: 'AppAdmin',
            private: true // private route and only accessible if authenticated
        }
    ],
    langs: [
        {
            order: 1,
            label: 'en',
            title: 'english',
        },
        {
            order: 2,
            label: 'fr',
            title: 'français',
        },
        {
            order: 3,
            label: 'vn',
            title: 'vietnam',
        },
    ]
};