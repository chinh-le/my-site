<template>
  <nav
    class="page-links"
    role="navigation"
    :style="posX"
  >
    <ul>
      <li
        v-for="appView in filteredViews"
        :key="appView.name"
      >
        <BaseNavigateLink :view="appView" />
      </li>
    </ul>
  </nav>
</template>

<script>
    import { setPosX, windowResizeHandler } from '@/js/helpers';
    import { appConfig } from '@/config';
    import BaseNavigateLink from './BaseNavigateLink';

    export default {
        components: {
            BaseNavigateLink
        },
        data () {
            return {
                appViews: appConfig.views,
                posX: null
            };
        },
        computed: {
            filteredViews () {
                let appViews = appConfig.views;

                Object.keys(appViews).forEach(key => {
                    // only show public routes
                    if (appViews[key].private) {
                        delete(appViews[key]);
                    }
                });

                return appConfig.views;
            }
        },
        created () {
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

<style lang="scss" scoped>
.page-links {
  display: none;
  font-family: $font-family-navigation;
  font-size: 2em;
  margin-bottom: 1.5em;
}
</style>