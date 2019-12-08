<template>
  <header>    
    <div
      id="site-header"
      class="site-header"
    >
      <BaseLogo />
      <AppSocialMedia />
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
        <button
          v-show="!authenticated"
          class="btn-login"
          title="sign in"
          @click="openAuth()"
        >
          <i class="material-icons">person_outline</i>
        </button>
        <button
          v-show="authenticated"
          class="btn-logout"
          title="sign out"
          @click="signout()"
        >
          <i class="material-icons">person</i>
        </button>
        <button
          class="btn-nav"
          title="open navigation"
          @click="openNav()"
        >
          <i class="material-icons">dehaze</i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
    import { logout } from '@/firebase';
    import { eventBus } from '@/js/eventBus';
    import BaseLogo from './BaseLogo';
    import AppSocialMedia from './AppSocialMedia';

    export default {
        components: {
            BaseLogo,
            AppSocialMedia
        },
        data () {
            return {
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
        created () {
            // console.log(
            // 'TLC: Header created -> this.$store.getters.isAuthenticated ',
            // this.$store.getters.isAuthenticated
            // );
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

<style lang="scss" scoped>
header {
    z-index: $z-index-header;//6
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0;
    background-color: $color-bg-header;
}

.site-header {
    width: var(--site-header-width);
    height: var(--site-header-height);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .social-media {
        display: none;
    }
}

button {
    i {
        padding: 0.6em;
    }
}

.login-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.btn-download {
    border-radius: 2em;
    &:after {
        content: "cloud download";
        @include screen-reader-ready;
    }
    .material-icons {
        color: $color-icon-download;
        padding: 0.6em 0.7em 0.6em 0.9em;
    }
}

.btn-login {
    &:after {
        content: "open login";
        @include screen-reader-ready;
    }
    .material-icons {
        color: $color-icon-auth;
    }
}

.btn-logout {
    &:after {
        content: "logout";
        @include screen-reader-ready;
    }
    .material-icons {
        color: $color-icon-auth;
    }
}

.btn-nav {
    &:after {
        content: "open navigation";
        @include screen-reader-ready;
    }
    .material-icons {
        color: $color-icon-nav;
    }
}
</style>
