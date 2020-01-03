<template>
  <footer
    id="theFooter"
    :class="$style['site-footer']"
  >
    <div :class="$style['site-footer-container']">
      <BaseCopyright />
      <BaseLang />
    </div>
  </footer>
</template>

<script>
    import BaseCopyright from './base/BaseCopyright';
    import BaseLang from './base/BaseLang';

    export default {
        components: {
            BaseCopyright,
            BaseLang
        }
    };
</script>

<style lang="scss" module>
.site-footer {
  --copyright-justify-content: unset;

  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: $theFooter-bg-color;
  z-index: $z-index-footer;
  // visibility: hidden;
}

.site-footer-container {
  width: 100%;
  max-width: $base-max-width;
  margin: 0 auto;
  padding: var(--the-footer-padding);
  box-sizing: border-box;
  display: flex;
  flex-direction: var(--the-footer-flex-direction);
  justify-content: var(--the-footer-justify-content);
  align-items: center;
}
</style>