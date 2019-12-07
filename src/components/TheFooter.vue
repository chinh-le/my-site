<template>
  <div class="site-footer">
    <footer class="site-footer-container">
      <AppCopyright />
      <AppLang />
    </footer>
  </div>
</template>

<script>
    import AppCopyright from './AppCopyright';
    import AppLang from './AppLang';

    export default {
        components: {
            AppCopyright,
            AppLang
        }
    };
</script>

<style lang="scss" scoped>
.site-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: $color-bg-header;
    z-index: $z-index-footer;
}

.site-footer-container {
    width: var(--site-header-width);
    margin: 0 auto;
    padding: 0 0.5em 0 1.5em;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>