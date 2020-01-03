<template>
  <div :class="$style['langs']">
    <ul :class="$style['lang-list']">
      <li
        v-for="(lang, index) in langs"
        :key="index"
      >
        <BaseLangButton
          :btn-label="lang.label"
          :btn-title="lang.title"
          :btn-handler="changeLang"
        />
      </li>
    </ul>
  </div>
</template>

<script>
    import { _appConfig } from '@/config';
    import BaseLangButton from './BaseLangButton';

    export default {
        components: {
            BaseLangButton
        },
        data () {
            return {
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
  flex-direction: var(--lang-list-direction);
  justify-content: flex-end;
  color: #2854c3;
}
</style>