<template>
  <div :class="$style['site-nav-sidebar']">
    <nav
      :class="$style['page-links']"
      role="navigation"
      :style="posX"
    >
      <ul>
        <li
          v-for="appView in appViews"
          :key="appView.name"
          :class="$style['page-links-item']"
        >
          <BaseNavigateLinkSidebar :view="appView" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
    import { setPosX, windowResizeHandler, viewsFilteredAndSorted } from '@/utils/helpers';
    import { appConfig } from '@/config';
    import BaseNavigateLinkSidebar from './base/BaseNavigateLinkSidebar';

    export default {
        components: {
            BaseNavigateLinkSidebar
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
.site-nav-sidebar {
  display: var(--site-nav-sidebar-display);
  position: relative;
  z-index: $z-index-sidebar-nav;
}
.page-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // padding-right: 0.6em;
    font-family: $nav-font-family;
    font-size: 2em;
    // margin-bottom: 1.5em;
}
</style>