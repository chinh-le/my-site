<template>
  <div :class="$style['dual-ring-container']">
    <!-- <div :class="$style['canvas-bg']" /> -->
    <img
      :class="$style['image']"
      :src="imgPath"
      alt="dual ring loading graphic"
    >
  </div>
</template>

<script>
    export default {
        computed: {
            imgPath () {
                return require('@/assets/svg/Dual Ring-1s-200px-55.svg');
            }
        }
    };
</script>

<style lang="scss" module>
.dual-ring-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  z-index: $z-index-overlay;
}
</style>