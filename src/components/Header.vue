<template>
  <header>
    <app-logo />
    <app-social-media />
    <div class="loginNav">
      <button class="btn-nav-open" @click="toggleNav()">
        <i />
        <i />
        <i />
      </button>

      <button v-show="!authenticated" class="btn-login" @click="toggleSignin()">
        <!-- <span class>[auth icon] - {{ authenticated }}</span> -->
        <i></i>login
      </button>
      <!-- <button
        v-show="authenticated"
        class=""
        @click="signout()"
        >
        <span class="">[logout icon] - {{ authenticated }}</span>
      </button>-->
      <!-- <app-navigation
        :show="showNav"
        :cb="toggleNav"
      />-->
    </div>
    <!-- <app-authentication
      :show="showSignin"
      @ceSignin="toggleSignin"
    />-->
  </header>
</template>
<script>
import { logout } from '@/firebase';
import Logo from './Logo.vue';
// import Navigation from './Navigation.vue';
// import Authentication from './Authentication.vue';
import SocialMedia from './SocialMedia.vue';

export default {
  components: {
    appLogo: Logo,
    // appNavigation: Navigation,
    // appAuthentication: Authentication,
    appSocialMedia: SocialMedia
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
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}
.btn-nav-open {
  padding: 1em 0.5em;
  > i {
    display: block;
    width: 2.5em;
    height: 0.3em;
    background-color: #fff;
    border-radius: 0.2em;
    margin: 0.3em 0;
  }
  &:after {
    content: "open navigation";
    @extend .visually-hidden;
  }
}
.btn-login {
  content: url("../assets/icons/perm_identity-24px.svg");
}
</style>
