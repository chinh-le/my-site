<template>
  <div :class="$style['login-nav']">
    <BaseLinkIcon 
      v-if="authenticated && downloadUrl" 
      :link-href="downloadUrl" 
      :link-target="'_blank'" 
      :link-class="'link-download'" 
      :link-title="'download resume'" 
      :link-icon="'cloud_download'"
    />
    <BaseButtonIcon
      v-if="!authenticated"
      :btn-class="'btn-login'"
      :btn-title="'sign in'"
      :btn-handler="openAuth"
      :btn-icon="'person_outline'"
    />
    <BaseButtonIcon
      v-else
      :btn-class="'btn-logout'"
      :btn-title="'sign out'"
      :btn-handler="signout"
      :btn-icon="'person'"
    />
    <BaseButtonIcon
      :btn-class="'btn-nac'"
      :btn-title="'open navigation'"
      :btn-handler="openNav"
      :btn-icon="'dehaze'"
    />
  </div>
</template>

<script>
    import { logout } from '@/firebase';
    import { eventBus } from '@/utils/eventBus';
    import BaseLinkIcon from './base/BaseLinkIcon';
    import BaseButtonIcon from './base/BaseButtonIcon';

    export default {
        components: {
            BaseLinkIcon,
            BaseButtonIcon
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
    }
</script>

<style lang="scss" module>
.login-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>