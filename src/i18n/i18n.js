
import Vue from 'vue';
import VueI18n from "vue-i18n";
import { supportedLangs, defaultLang, fallbackLang } from './locales/index';

// const messages = Object.assign(supportedLangs); // Object assign is relevant???
const messages = supportedLangs;

// REM - check if OS/navigator languages are supported by the app's i18n messages
// const navigatorLangs = navigator.languages;
const navigatorLangSupported = () => {
    return Object.getOwnPropertyNames(supportedLangs)
        .find(supportedLang => {
            return navigator.languages
                .find(navigatorLang => {
                    return (navigatorLang.split(new RegExp(supportedLang, 'gi')).length - 1 > 0 ? supportedLang : null);
                });
        });
};

/* REM - app lang default set by
1. if lang was set by user (localstorage), if not
2. then if navigator lang is supprted by the app, if not
3. then default lang that is set in ./locales/index.js
 */
const setAppDefaultLang = () => {
    return localStorage.getItem('i18nLocale') || navigatorLangSupported() || defaultLang;
}

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: setAppDefaultLang(), // by default
    fallbackLocale: fallbackLang, // if cannot load the default locale
    messages, // set locale messages
});
