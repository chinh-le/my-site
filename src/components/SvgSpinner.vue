<template>
  <div class="image-container">
    <div class="bg-canvas"></div>
    <img class="svg-image" :src="imgPath" alt="ripple graphic" />
  </div>
</template>
<script>
export default {
  /* data () {
    return {
      imgSrc: null
    };
  },
  props: {
    imgFilename: {
      type: String
    },
    imgSize: {
      type: String,
      default: null
    }
  }, */
  computed: {
    imgPath () {
      // return require(`@/components/svg/${this.imgFilename}`);
      return require(`@/components/svg/Ripple-2s-200px.svg`);
    }
  }
};
</script>
<style scoped lang="scss">
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
