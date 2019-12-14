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
        @click="closeSignin()"
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
          :btn-class="'btn-close'"
          :btn-title="$t('buttons.close')"
          :btn-handler="closeSignin"
          :btn-icon="'close'"
        />
        <AppAuthenticateForm :close-signin="closeSignin" />
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
    import AppAuthenticateForm from './AppAuthenticateForm';
    import BaseButtonIcon from './base/BaseButtonIcon';

    export default {
        components: {
            BaseButtonIcon,
            AppAuthenticateForm,
        },
        data () {
            return {
                elemPersistLocßkScroll: null,
                isShow: false,
            };
        },
        created () {
            // // // // console.log('TLC: Authentication - created -> created');
            eventBus.$on('evtBusOpenAuth', () => {
                this.isShow = true;

                // disableBodyScroll(this.elemPersistLockScroll);
            });
        },
        beforeDestroy () {
            // // // // console.log('TLC: Authentication - beforeDestroy -> beforeDestroy');
            // clearAllBodyScrollLocks();
        },
        mounted () {
            // // // // console.log('TLC: Authentication - mounted -> mounted');
            this.elemPersistLockScroll = document.querySelector('#siteAuth');
        },
        methods: {
            closeSignin () {
                this.isShow = false;

                // enableBodyScroll(this.elemPersistLockScroll);
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