
import Vue from 'vue';
import VueI18n from "vue-i18n";
import { languages, defaultLanguage, fallbackLanguage } from './locales/index';

const messages = Object.assign(languages);
// console.log('TLC: messages', messages);

/* const messages = {
    en: {
        homeHeading1: 'welcome to my personal site',
        aboutHeading1: 'about me'
    },
    fr: {
        homeHeading1: 'bienvenue à mon site personel',
        aboutHeading1: 'à propos de moi'
    },
    vn: {
        homeHeading1: 'Chào mừng đến với trang web cá nhân của tôi',
        aboutHeading1: 'về tôi'
    }
};
 */
Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: defaultLanguage, // by default
    fallbackLocale: fallbackLanguage, // if cannot load the default locale
    messages, // set locale messages
});
