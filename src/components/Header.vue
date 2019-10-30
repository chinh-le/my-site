<template>
  <header class="">
    <app-logo></app-logo>
    <button class="" @click="toggleNav()">
      <span class="">[hamburger icon]</span>
    </button>
    <app-navigation :show="showNav" :cb="toggleNav"></app-navigation>
    <button class="" @click="toggleSignin()">
      <span class="">[auth icon]</span>
    </button>
    <app-signin :show="showSignin" @ceSignin="toggleSignin"></app-signin>
  </header>
</template>
<script>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
import Signin from './Auth/Signin.vue';

export default {
  data () {
    return {
      showNav: false,
      showSignin: false
    };
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav;
    },
    toggleSignin () {
      this.showSignin = !this.showSignin;
    }
  },
  components: {
    appLogo: Logo,
    appNavigation: Navigation,
    appSignin: Signin
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
