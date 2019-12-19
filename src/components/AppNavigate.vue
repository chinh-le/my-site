<template>
  <div
    id="siteNav"
    class="site-nav"
  >
    <transition
      name="slide"
      mode="in-out"
      :enter-active-class="$style['slide-enter-active']"
      :leave-active-class="$style['slide-leave-active']"
    >
      <div
        v-show="isShow"
        :class="$style['canvas-bg']"
        :title="$t('buttons.close')"
        @click="closeNav()"
      />
    </transition>
    <transition
      name="slide"
      mode="in-out"
      :enter-active-class="$style['slide-enter-active']"
      :leave-active-class="$style['slide-leave-active']"
    >
      <div
        v-show="isShow"
        id="navigation"
        :class="$style['navigation']"
      >
        <BaseButtonIcon
          :btn-id="'btnCloseNavigate'"
          :btn-class="'btn-close'"
          :btn-title="$t('buttons.close')"
          :btn-handler="closeNav"
          :btn-icon="'close'"
        />
        <div
          id="navigationContent"
          :class="$style['navigation-content']"
        >
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
                elNavigationContent: null,
                elBtnCloseNavigate: null,
                isShow: false,
            };
        },
        watch: {
            $route () {
                this.closeNav();
            }
        },
        created () {
            // console.log('TLC: Navigation - created -> created');
            eventBus.$on('evtBusOpenNav', () => {
                this.openNav();
            });
            
            eventBus.$on('evtBusCloseNav', () => {
                this.closeNav();
            });
        },
        mounted () {
            this.elNavigationContent = document.querySelector('#navigationContent');
            this.elBtnCloseNavigate = document.querySelector('#btnCloseNavigate');

            setInlineStyle(this);

            window.addEventListener('resize', () => setInlineStyle(this));
        },
        beforeDestroy () {
            eventBus.$off('evtBusOpenAuth');
            eventBus.$off('evtBusCloseAuth');
            window.removeEventListener('resize', setInlineStyle);
        },
        methods: {
            openNav () {
                this.isShow = true;
            },
            closeNav () {
                this.isShow = false;
            }
        },
    };

    const setInlineStyle = (vm) => {
        const elHeight = window.innerHeight - vm.elBtnCloseNavigate.clientHeight;

        vm.elNavigationContent.setAttribute('style', `height: ${elHeight}px`);
    };
</script>

<style lang="scss" module>
.navigation-content {
  width: var(--navigation-content-width);
  margin: 0 auto;
  // padding: var(--navigation-padding);
  box-sizing: border-box;
  > * {
    margin-bottom: 1em;
  }
  overflow-y: scroll;
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
@include canvas-bg; 
@include slide-helper;
</style>