<template>
  <div
    id="siteNav"
    class="site-nav"
  >
    <transition
      name="fading"
      mode="in-out"
    >
      <div
        v-show="isShow"
        class="bg-canvas"
        :title="$t('buttons.close')"
        @click="closeNav()"
      />
    </transition>
    <transition name="slide">
      <div
        v-show="isShow"
        id="navigation"
        class="navigation"
      >
        <BaseButtonIcon
          :btn-class="'btn-close'"
          :btn-title="$t('buttons.close')"
          :btn-handler="closeNav"
          :btn-icon="'close'"
        />
        <div class="content">
          <BaseLang />
          <AppNavigateLinks />
          <AppSocialMedia />
          <BaseCopyright />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    import {
        disableBodyScroll,
        enableBodyScroll,
        clearAllBodyScrollLocks
    } from 'body-scroll-lock';
    import { eventBus } from '@/utils/eventBus';
    import BaseLang from './base/BaseLang';
    import AppNavigateLinks from './AppNavigateLinks';
    import AppSocialMedia from './AppSocialMedia';
    import BaseCopyright from './base/BaseCopyright';
    import BaseButtonIcon from './base/BaseButtonIcon';

    export default {
        components: {
            BaseButtonIcon,
            BaseLang,
            AppNavigateLinks,
            AppSocialMedia,
            BaseCopyright
        },
        data () {
            return {
                isShow: false,
                elemPersistLockScroll: null
            };
        },
        watch: {
            // $route (to, from) {
            // console.log('to: ', to);
            // console.log('from: ', from);
            $route () {
                this.isShow = false; // close nav on route change
            }
        },
        created () {
            // console.log('TLC: Navigation - created -> created');
            eventBus.$on('evtBusOpenNav', () => {
                /* scrollTo({
                          x: 0,
                          y: 0
                        }); */

                this.isShow = true;

                disableBodyScroll(this.elemPersistLockScroll);
                // console.log(
                // 'TLC: Navigation - created - evtBusOpenNav -> disableBodyScroll'
                // );
            });
        },
        mounted () {
            // console.log('TLC: Navigation - mounted -> mounted');
            this.elemPersistLockScroll = document.querySelector('#siteNav');
        },
        beforeDestroy () {
            // console.log('TLC: Navigation - beforeDestroy -> beforeDestroy');
            clearAllBodyScrollLocks();
        },
        methods: {
            closeNav () {
                this.isShow = false;

                enableBodyScroll(this.elemPersistLockScroll);
                // console.log('TLC: Navigation - closeNav -> enableBodyScroll');
            }
        },
    };

</script>

<style lang="scss" scoped>
.navigation {
  --copyright-flex-direction: row;

  @include slide-in-panel;
}

.page-links {
  display: block;
}

.content {
  padding: 2em 1em;
}

@include slide-helper;

.bg-canvas {
  @include bg-canvas;
}

@include fading-helper;
</style>