<template>
  <header :class="$style['site-header']">
    <div :class="$style['site-header-container']">    
      <BaseLogo />
      <AppSocialMedia />
      <AppSiteActions />
    </div>
  </header>
</template>

<script>
    import { logout } from '@/firebase';
    import { eventBus } from '@/utils/eventBus';
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
    background-color: $color-bg-header;
}
.site-header-container {
    width: var(--site-header-width);
    height: var(--site-header-height);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>
