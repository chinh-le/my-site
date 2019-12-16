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
  height: var(--site-footer-height);
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: $theFooter-bg-color;
  z-index: $z-index-footer;
  // visibility: hidden;
}

.site-footer-container {
  width: var(--site-footer-container-width);
  margin: 0 auto;
  padding: 0 0.2em 0 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>