<template>
  <header>
    <div class="container">
      <app-logo />
      <app-social-media />
      <div class="login-nav">
        <a
          v-show="authenticated && downloadUrl"
          :href="downloadUrl"
          target="_blank"
          class="btn-download"
        >
          <i class="material-icons md-light">cloud_download</i>
        </a>
        <button v-show="!authenticated" class="btn-login" @click="openAuth()">
          <i class="material-icons md-light">person_outline</i>
          <!-- <i class="material-icons md-light md-inactive">person_outline</i> -->
        </button>
        <button v-show="authenticated" class="btn-logout" @click="signout()">
          <i class="material-icons md-light">person</i>
          <!-- <i class="material-icons md-dark md-inactive">person</i> -->
        </button>
        <button class="btn-nav" @click="openNav()">
          <i class="material-icons md-light md-48">dehaze</i>
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
@import "../style/components/header.scss";
</style>
