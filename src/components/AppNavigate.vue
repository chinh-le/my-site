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
        // disableBodyScroll,
        // enableBodyScroll,
        // clearAllBodyScrollLocks
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

                // disableBodyScroll(this.elemPersistLockScroll);
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
            // clearAllBodyScrollLocks();
        },
        methods: {
            closeNav () {
                this.isShow = false;

                // enableBodyScroll(this.elemPersistLockScroll);
                // console.log('TLC: Navigation - closeNav -> enableBodyScroll');
            }
        },
    };

</script>

<style lang="scss" scoped>
.content {
  padding: var(--navigation-padding);
  box-sizing: border-box;
  > * {
    margin-bottom: 1em;
  }
}
#socialMedia {
  margin-top: 2em;
}
.navigation {
  z-index: $z-index-overlay;
  position: absolute;
  top: 0;
  right: 0;
  width: var(--slide-in-width);
  height: var(--slide-in-height);
  display: flex;
  flex-direction: column;
  background-color: $slide-in-bg-color;
}
.bg-canvas {
  z-index: $z-index-overlay-bg;
  position: absolute;
  top: 0;
  left: 0;
  width: var(--slide-in-width);
  height: var(--slide-in-height);
  background-color: $overlay-bg-color;
}
.slide-enter-active {
    animation: slideIn 0.5s ease-in;
  }
  .slide-leave-active {
    animation: slideOut 0.4s ease-out;
  }
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
@include fading-helper;
</style>