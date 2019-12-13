<template>
  <div
    id="siteAuth"
    class="site-auth"
  >
    <transition
      name="fading"
      mode="in-out"
    >
      <div
        v-show="isShow"
        class="bg-canvas"
        :title="$t('buttons.close')"
        @click="closeSignin()"
      />
    </transition>
    <transition
      name="slide"
      mode="in-out"
    >
      <div
        v-show="isShow"
        class="signin"
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

<style lang="scss" scoped>
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
.bg-canvas {
  @include bg-canvas;
}
@include slide-helper;
@include fading-helper;

</style>