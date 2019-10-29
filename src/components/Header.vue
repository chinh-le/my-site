<template>
  <header class="">
    <app-logo></app-logo>
    <button class="" @click="toggleNav()">
      <span class="">[hamburger icon]</span>
    </button>
    <app-navigation :showNav="showNav" :toggleNav="toggleNav"></app-navigation>
  </header>
</template>
<script>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';

export default {
  data () {
    return {
      showNav: false
    };
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav;
    }
  },
  components: {
    appLogo: Logo,
    appNavigation: Navigation
  }
};
</script>
<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
