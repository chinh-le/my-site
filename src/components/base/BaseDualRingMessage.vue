<template>
  <div
    :class="$style['dual-ring-container']"
    @click="clickHandler"
  >
    <div :class="$style['canvas-bg']" />
    <img
      v-if="errorCode === ''"
      :class="$style['image']"
      :src="imgPath"
      alt="dual ring loading graphic"
    >
    <BaseErrorRequestOverlay
      v-else
      :error-code="errorCode"
    />
  </div>
</template>

<script>
    import BaseErrorRequestOverlay from './BaseErrorRequestOverlay';
    import { _eventBus } from '@/utils/eventBus';
    export default {
        components: {
            BaseErrorRequestOverlay
        },
        props: {
            errorCode: {
                type: String,
                default: () => ''
            }
        },
        computed: {
            imgPath () {
                return require('@/assets/svg/Dual Ring-1s-200px-55.svg');
            }
        },
        methods: {
            clickHandler () {
                _eventBus.closeAuth();
            }
        }
    };
</script>

<style lang="scss" module>
.dual-ring-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  // width: 100%;
  z-index: $z-index-overlay;
}
@include canvas-bg($canvas-spinner-bg-color);
</style>