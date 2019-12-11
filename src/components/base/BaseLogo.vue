<template>
  <div :class="$style['logo']">
    <router-link
      to="/"
      :title="$t('navigation.home')"
    >
      cle.
    </router-link>
  </div>
</template>

<script>
    export default {
    
    }
</script>

<style lang="scss" module>
.logo {
    font-family: $font-family-logo;
    font-size: var(--logo-font-size);
    transition: font-size 1s var(--logo-anim-timing-function);
    a {
        text-decoration: none;
        color: $color-logo;
        padding: 0.65em; 
    }
}
</style>