<template>
  <div
    id="siteAuth"
    class="site-auth"
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
        @click="closeAuth()"
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
        :class="$style['signin']"
      >
        <BaseButtonIcon
          :btn-id="'btnCloseAuth'"
          :btn-class="'btn-close'"
          :btn-title="$t('buttons.close')"
          :click-handler="closeAuth"
          :btn-icon="'close'"
          :tabindex="tabIndex.closeButton[0]"
        />
        <div id="signinContent">
          <AppAuthenticateForm :close-auth="closeAuth" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    import { _eventBus } from '@/utils/eventBus';
    import { _scrollTo } from '@/utils/helpers';
    import { _tabIndex } from '@/utils/tabIndex';
    import AppAuthenticateForm from './AppAuthenticateForm';
    import BaseButtonIcon from './base/BaseButtonIcon';

    export default {
        components: {
            BaseButtonIcon,
            AppAuthenticateForm,
        },
        data () {
            return {
                tabIndex: _tabIndex,
                isShow: false,
            };
        },
        created () {
            // // // // console.log('TLC: Authentication - created -> created');
            _eventBus.$on('evtBusOpenAuth', () => {
                this.openAuth();
            });
            _eventBus.$on('evtBusCloseAuth', () => {
                this.closeAuth();
            });
        },
        beforeDestroy () {
            _eventBus.$off('evtBusOpenAuth');
            _eventBus.$off('evtBusCloseAuth');
        },
        methods: {
            openAuth () {
                this.isShow = true;
            },
            closeAuth () {
                this.isShow = false;

                _scrollTo(document.querySelector('#formAuthenticateContainer'), 0, 0);
            },
        }
    };

</script>

<style lang="scss" module>
.signin {
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