<template>
  <header
    id="theHeader"
    :class="$style['site-header']"
  >
    <div :class="$style['site-header-container']">    
      <BaseLogo />
      <AppSocialMedia />
      <AppSiteActions />
    </div>
  </header>
</template>

<script>
    import BaseLogo from './base/BaseLogo';
    import AppSocialMedia from './AppSocialMedia';
    import AppSiteActions from './AppSiteActions';

    export default {
        components: {
            AppSiteActions,
            BaseLogo,
            AppSocialMedia
        },
    };
</script>

<style lang="scss" module>
.site-header {
    z-index: $z-index-header;//6
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0;
    background-color: $theHeader-bg-color;
    height: var(--site-header-height);
    transition: height var(--the-header-anim-duration) var(--the-header-anim-timing);
    // visibility: hidden;
}
.site-header-container {
    width: 100%;
    max-width: $base-max-width;
    height: var(--site-header-height);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>
