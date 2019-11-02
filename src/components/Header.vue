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
      v-show="!authenticated"
      class=""
      @click="toggleSignin()"
      >
      <span class="">[auth icon] - {{ authenticated }}</span>
    </button>
    <button
      v-show="authenticated"
      class=""
      @click="signout()"
      >
      <span class="">[logout icon] - {{ authenticated }}</span>
    </button>
    <app-authenticate
      :show="showSignin"
      @ceSignin="toggleSignin"
      />
  </header>
</template>
<script>
import { logout } from '@/firebase';
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
import Authenticate from './Authenticate.vue';

export default {
  components: {
    appLogo: Logo,
    appNavigation: Navigation,
    appAuthenticate: Authenticate
  },
  data () {
    return {
      showNav: false,
      showSignin: false
    };
  },
  computed: {
    authenticated () {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav;
    },
    toggleSignin () {
      this.showSignin = !this.showSignin;
    },
    signout () {
      logout();
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
