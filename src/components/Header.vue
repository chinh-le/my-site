<template>
  <header class="">
    <app-logo></app-logo>
    <button class="" @click="toggleNav()">
      <span class="">[hamburger icon]</span>
    </button>
    <app-navigation :show="showNav" :cb="toggleNav"></app-navigation>
    <button class="" @click="toggleAuth()">
      <span class="">[auth icon]</span>
    </button>
    <app-auth :show="showAuth" @ceAuth="toggleAuth"></app-auth>
  </header>
</template>
<script>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
import Auth from './Auth.vue';

export default {
  data () {
    return {
      showNav: false,
      showAuth: false
    };
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav;
    },
    toggleAuth () {
      this.showAuth = !this.showAuth;
    }
  },
  components: {
    appLogo: Logo,
    appNavigation: Navigation,
    appAuth: Auth
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
