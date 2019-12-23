<template>
  <nav
    :class="$style['page-links']"
    :role="$t('navigation.heading')"
    :style="posX"
  >
    <ul>
      <li
        v-for="appView in appViews"
        :key="appView.name"
        :class="$style['page-links-item']"
      >
        <BaseNavigateLink :view="appView" />
      </li>
    </ul>
  </nav>
</template>

<script>
    import { _setStyleInlineJustify, _viewsFilteredAndSorted } from '@/utils/helpers';
    import { _appConfig } from '@/config';
    import BaseNavigateLink from './base/BaseNavigateLink';

    export default {
        components: {
            BaseNavigateLink
        },
        data () {
            return {
                appViews: null,
                posX: null
            };
        },
        created () {
            // filter (not to include private route in navigaton) and sort views array from config
            this.appViews = _viewsFilteredAndSorted(_appConfig.views);
            
            // set/keep the nav (pageLinks) dots to the right aligning with the hamburger icon
            setInlineStyle(this);

            window.addEventListener('resize', () => setInlineStyle(this));
        },
        beforeDestroy () {
            window.removeEventListener('resize', setInlineStyle);
        }
    };

    const setInlineStyle = (vm) => {
        vm.posX = _setStyleInlineJustify('right');
    };
</script>

<style lang="scss" module>
.page-links {
  font-family: $nav-font-family;
  font-size: 2em;
  margin-bottom: 1.5em;
}
</style>