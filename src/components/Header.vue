<template>
  <header>
    <div class="site-header">
      <app-logo />
      <app-social-media />
      <div class="login-nav">
        <a
          v-show="authenticated && downloadUrl"
          :href="downloadUrl"
          target="_blank"
          class="btn-download"
          title="download resume"
        >
          <i class="material-icons">cloud_download</i>
        </a>
        <button v-show="!authenticated" class="btn-login" @click="openAuth()" title="sign in">
          <i class="material-icons">person_outline</i>
        </button>
        <button v-show="authenticated" class="btn-logout" @click="signout()" title="sign out">
          <i class="material-icons md-light">person</i>
        </button>
        <button class="btn-nav" @click="openNav()" title="open navigation">
          <i class="material-icons">dehaze</i>
        </button>
        <!-- <button class="btn-nav-open" @click="openNav()">
          <i />
          <i />
          <i />
        </button>-->
      </div>
    </div>
  </header>
</template>
<script>
import { logout } from '@/firebase';
import Logo from './Logo.vue';
import SocialMedia from './SocialMedia.vue';
import { eventBus } from '@/eventBus';

export default {
  created () {
    // console.log(
    // 'TLC: Header created -> this.$store.getters.isAuthenticated ',
    // this.$store.getters.isAuthenticated
    // );
  },
  components: {
    appLogo: Logo,
    appSocialMedia: SocialMedia
  },
  data () {
    return {
      showNav: false,
      showSignin: false
    };
  },
  computed: {
    downloadUrl () {
      return this.$store.getters.downloadUrl;
    },
    authenticated () {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    openNav () {
      eventBus.openNav();
    },
    openAuth () {
      eventBus.openAuth();
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
@import "@/styles/components/header";
</style>
