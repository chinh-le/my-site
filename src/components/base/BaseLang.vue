<template>
  <div :class="$style['langs']">
    <ul :class="$style['langs-list']">
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
    import { appConfig } from '@/config';
    import BaseLangButton from './BaseLangButton';

    export default {
        components: {
            BaseLangButton
        },
        data () {
            return {
                langs: appConfig.langs
            }
        },
        created () {
            this.langs.sort((langA, langB) => (langA.order > langB.order) ? 1 : -1);
        },
        methods: {
            changeLang (lang) {
                // console.log('TLC: changeLang -> lang', lang);
                this.$i18n.locale = lang;

                localStorage.setItem('i18nLocale', lang);
            }
        }        
    }
</script>

<style lang="scss" module>
.langs-list {
  display: flex;
  flex-direction: row;
  color: #2854c3;
}
</style>