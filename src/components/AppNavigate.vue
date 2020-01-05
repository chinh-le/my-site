<template>
  <div
    id="siteNav"
    :class="$style['site-nav']"
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
    import { _eventBus } from '@/utils/eventBus';
    import { _scrollTo } from '@/utils/helpers';
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
                if (this.isShow) {
                    this.closeNav();
                }
            }
        },
        created () {
            // console.log('TLC: Navigation - created -> created');
            _eventBus.$on('evtBusOpenNav', () => {
                this.openNav();
            });
            
            _eventBus.$on('evtBusCloseNav', () => {
                this.closeNav();
            });
        },
        mounted () {
            this.elNavigationContent = document.querySelector('#navigationContent');
            this.elBtnCloseNavigate = document.querySelector('#btnCloseNavigate');

            // setInlineStyle(this);

            window.addEventListener('resize', () => setInlineStyle(this));
        },
        beforeDestroy () {
            _eventBus.$off('evtBusOpenAuth');
            _eventBus.$off('evtBusCloseAuth');
            window.removeEventListener('resize', setInlineStyle);
        },
        methods: {
            openNav () {
                this.isShow = true;
            },
            closeNav () {
                this.isShow = false;

                _scrollTo(document.querySelector('#navigationContent'), 0, 0);
            }
        },
    };

    const setInlineStyle = (vm) => {
        const elHeight = window.innerHeight - vm.elBtnCloseNavigate.clientHeight;

        vm.elNavigationContent.setAttribute('style', `height: ${elHeight}px`);
    };
</script>

<style lang="scss" module>
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
.navigation-content {
  width: var(--navigation-content-width);
  margin: 0 auto;
  box-sizing: border-box;
  overflow-y: auto;
  > * {
    margin-bottom: 1em;
  }
}
#socialMedia {
  margin-top: 2em;
}
@include canvas-bg; 
@include slide-helper;
</style>