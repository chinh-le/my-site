<template>
  <header>
    <div class="container">
      <app-logo />
      <app-social-media />
      <div class="loginNav">
        <button v-show="!authenticated" class="btn-login" @click="openAuth()">
          <i class="material-icons md-light">person_outline</i>
          <!-- <i class="material-icons md-light md-inactive">person_outline</i> -->
        </button>
        <button v-show="authenticated" class="btn-logout" @click="signout()">
          <i class="material-icons md-light">person</i>
          <!-- <i class="material-icons md-dark md-inactive">person</i> -->
        </button>
        <button class="btn-nav-open" @click="openNav()">
          <i />
          <i />
          <i />
        </button>
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
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}

.container {
}

button {
  margin-left: 0.4em;
}
.btn-nav-open {
  padding: 1em 0 1em 1em;
  > i {
    display: block;
    border-radius: 0.2em;
    padding: 0.1em 1em;
    margin: 0.25em;
    background-color: #fff;
  }
  &:after {
    content: "open navigation";
    @extend .visually-hidden;
    display: none;
  }
}
.btn-login {
  &:after {
    content: "open login";
  }
}
.btn-logoout {
  &:after {
    content: "logout";
  }
}
.btn-login,
.btn-logout {
  padding: 0.8em 0 0.8em 1.5em;
  &:after {
    @extend .visually-hidden;
  }
  .material-icons {
    &.md-light,
    &.md-dark {
      color: rgba($color: #fff, $alpha: 1);
    }
    &.md-inactive {
      // color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
