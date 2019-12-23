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
    import { _setStyleInlineJustify, _viewsFilteredAndSorted } from '@/utils/helpers';
    import { _appConfig } from '@/config';
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
    justify-content: var(--site-nav-sidebar-justify);
    font-family: $nav-font-family;
    font-size: 2em;
}
</style>