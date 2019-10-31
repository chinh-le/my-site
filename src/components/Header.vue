<template>
  <header class="">
    <app-logo />
    <button
      class=""
      @click="toggleNav()"
      >
      <span class="">[hamburger icon]</span>
    </button>
    <app-navigation
      :show="showNav"
      :cb="toggleNav"
      />
    <button
      class=""
      @click="toggleSignin()"
      >
      <span class="">[auth icon] - {{ getAuthentication }}</span>
    </button>
    <app-signin
      :show="showSignin"
      @ceSignin="toggleSignin"
      />
  </header>
</template>
<script>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
import Signin from './Auth/Signin.vue';

export default {
  components: {
    appLogo: Logo,
    appNavigation: Navigation,
    appSignin: Signin
  },
  data () {
    return {
      showNav: false,
      showSignin: false
    };
  },
  computed: {
    getAuthentication () {
      return this.$store.getters.authentication;
    }
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav;
    },
    toggleSignin () {
      this.showSignin = !this.showSignin;
    }
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
