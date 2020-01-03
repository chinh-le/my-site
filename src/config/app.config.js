export const _appConfig = {
    recaptchaSiteKey: process.env.VUE_APP_GOOGLE_RECAPTCHA_SITEKEY, // v3 site key (frontend)
    appAuthenticationType: process.env.VUE_APP_AUTHENTICATION_TYPE,
    appAdminEmail: process.env.VUE_APP_ADMIN_EMAIL,
    appAdminPassword: process.env.VUE_APP_ADMIN_PASSWORD,
    appResumeEmail: process.env.VUE_APP_RESUME_EMAIL,
    appResumePassword: process.env.VUE_APP_RESUME_PASSWORD,
    appResumeNamePath: process.env.VUE_APP_GOOGLE_RESUME_NAME_PATH,
    appTesterEmail: process.env.VUE_APP_TESTER_EMAIL,
    appTesterPassword: process.env.VUE_APP_TESTER_PASSWORD,
    appRequestRetry: 20,
    views: [
        {
            order: 1,
            name: 'home',
            path: '/',
            class: 'link-home',
            title: 'home',
            componentName: 'AppHome'
        },
        {
            order: 2,
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
            order: 4,
            name: 'education',
            path: '/education',
            class: 'link-education',
            title: 'education',
            componentName: 'AppEducation'
        },
        {
            order: 5,
            name: 'contact',
            path: '/contact',
            class: 'link-contact',
            title: 'contact',
            componentName: 'AppContact'
        },
        {
            order: 6,
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