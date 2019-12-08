export const appConfig = {
    recaptchaSiteKey: process.env.VUE_APP_GOOGLE_RECAPTCHA_SITEKEY, // v3 site key (frontend)
    appAuthenticationType: process.env.VUE_APP_AUTHENTICATION_TYPE,
    appResumePath: process.env.VUE_APP_RESUME_PATH,
    appDefaultEmail: process.env.VUE_APP_DEFAULT_EMAIL,
    appDefaultPassword: process.env.VUE_APP_DEFAULT_PASSWORD,
    views: {
        home: {
            name: 'home',
            path: '/',
            class: 'link-home',
            title: 'home',
            componentName: 'AppHome'
        },
        about: {
            name: 'about',
            path: '/about',
            class: 'link-about',
            title: 'about',
            componentName: 'AppAbout'
        },
        works: {
            name: 'works',
            path: '/works',
            class: 'link-works',
            title: 'works',
            componentName: 'AppWorks'
        },
        education: {
            name: 'education',
            path: '/education',
            class: 'link-education',
            title: 'education',
            componentName: 'AppEducation'
        },
        contact: {
            name: 'contact',
            path: '/contact',
            class: 'link-contact',
            title: 'contact',
            componentName: 'AppContact'
        },
        admin: {
            name: 'admin',
            path: '/admin',
            class: 'link-admin',
            title: 'admin',
            componentName: 'AppAdmin',
            private: true // private route and only accessible if authenticated
        }
    }
};