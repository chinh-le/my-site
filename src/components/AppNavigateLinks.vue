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
    import { setPosX, windowResizeHandler, viewsFilteredAndSorted } from '@/utils/helpers';
    import { appConfig } from '@/config';
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
            this.appViews = viewsFilteredAndSorted(appConfig.views);
            
            // set/keep the nav (pageLinks) dots to the right aligning with the hamburger icon
            this.posX = setPosX('right');

            window.addEventListener('resize', this.resizeHandler);
        },
        beforeDestroy () {
            // console.log('TLC: PageLinks -> beforeDestroy');
            window.removeEventListener('resize', this.resizeHandler);
        },
        methods: {
            resizeHandler (evt) {
                this.posX = windowResizeHandler(evt, 'right');
            }
        }
    };

</script>

<style lang="scss" module>
.page-links {
  // display: none;
  display: var(--nav-links-state);
  font-family: $font-family-navigation;
  font-size: 2em;
  margin-bottom: 1.5em;
}
</style>