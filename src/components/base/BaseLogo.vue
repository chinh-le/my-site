<template>
  <div :class="$style['logo']">
    <router-link
      to="/"
      :title="$t('navigation.home')"
    >
      clê.
    </router-link>
  </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" module>
.logo {
  width: 30%;
  a {
    font-family: $logo-font-family;
    font-size: var(--logo-font-size);
    transition: font-size var(--the-header-anim-duration) var(--the-header-anim-timing);    
    text-decoration: none;
    color: $logo-color;
    padding: 0.65em; 
  }
}
</style>