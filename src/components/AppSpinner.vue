<template>
  <div class="image-container">
    <div class="bg-canvas" />
    <img
      class="svg-image"
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

<style lang="scss" scoped>
.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @include bg-canvas;
  .svg-image {
    width: 20%;
    z-index: $z-index-overlay;
  }
}
</style>