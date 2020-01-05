<template>
  <div :class="$style['logo']">
    <router-link
      to="/"
      :title="$t('navigation.home')"
      :tabindex="tabIndex.logo[0]"
    >
      clê.
    </router-link>
  </div>
</template>

<script>
    import { _tabIndex } from '@/utils/tabIndex';
    
    export default {
        data () {
            return {
                tabIndex: _tabIndex
            };
        }
    };
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
    padding: 0.5em; 
  }
}
</style>