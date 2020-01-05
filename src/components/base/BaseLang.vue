<template>
  <ul :class="$style['lang-list']">
    <li
      v-for="(lang, index) in langs"
      :key="index"
    >
      <BaseLangButton
        :btn-label="lang.label"
        :btn-title="lang.title"
        :btn-handler="changeLang"
        :tabindex="tabIndex.lang[index]"
      />
    </li>
  </ul>
</template>

<script>
    import { _appConfig } from '@/config';
    import { _tabIndex } from '@/utils/tabIndex';
    import BaseLangButton from './BaseLangButton';

    export default {
        components: {
            BaseLangButton
        },
        data () {
            return {
                tabIndex: _tabIndex,
                langs: _appConfig.langs
            };
        },
        created () {
            this.langs.sort((langA, langB) => (langA.order > langB.order) ? 1 : -1);
        },
        methods: {
            changeLang (lang) {
                this.$i18n.locale = lang;

                localStorage.setItem('i18nLocale', lang);

                this.$store.dispatch('appLocale', lang);
            }
        }        
    };
</script>

<style lang="scss" module>
.lang-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  order: var(--the-footer-lang-order);
}
</style>