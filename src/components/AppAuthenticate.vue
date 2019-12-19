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
          :btn-handler="closeAuth"
          :btn-icon="'close'"
        />
        <AppAuthenticateForm :close-auth="closeAuth" />
      </div>
    </transition>
  </div>
</template>

<script>
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
                isShow: false,
            };
        },
        created () {
            // // // // console.log('TLC: Authentication - created -> created');
            eventBus.$on('evtBusOpenAuth', () => {
                this.openAuth();
            });
            eventBus.$on('evtBusCloseAuth', () => {
                this.closeAuth();
            });
        },
        beforeDestroy () {
            eventBus.$off('evtBusOpenAuth');
            eventBus.$off('evtBusCloseAuth');
        },
        methods: {
            openAuth () {
                this.isShow = true;
            },
            closeAuth () {
                this.isShow = false;
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