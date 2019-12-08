<template>
  <div :class="$style.container">
    <div :class="$style.canvas" />
    <img
      :class="$style.image"
      :src="imgPath"
      alt="ripple graphic"
    >
  </div>
</template>

<script>
    export default {
        computed: {
            imgPath () {
                return require('@/assets/svg/Ripple-2s-200px.svg');
            }
        }
    }
</script>

<style lang="scss" module>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.canvas {
  @include bg-canvas;
}
.image {
    width: 20%;
    z-index: $z-index-overlay;
  }
</style>