<template>
  <div :class="$style['login-nav']">
    <BaseDownloadLinkIcon v-if="isAuthenticated" />
    <BaseButtonIcon
      v-if="!isAuthenticated"
      :btn-class="'btn-login'"
      :btn-title="$t('buttons.authenticate')"
      :btn-handler="openAuth"
      :btn-icon="'person_outline'"
    />
    <BaseButtonIcon
      v-else
      :btn-class="'btn-logout'"
      :btn-title="$t('buttons.signout')"
      :btn-handler="signout"
      :btn-icon="'person'"
    />
    <BaseButtonIcon
      :btn-class="'btn-nac'"
      :btn-title="$t('buttons.navigate')"
      :btn-handler="openNav"
      :btn-icon="'dehaze'"
    />
  </div>
</template>

<script>
    import { logout } from '@/firebase';
    import { eventBus } from '@/utils/eventBus';
    import BaseDownloadLinkIcon from './base/BaseDownloadLinkIcon';
    import BaseButtonIcon from './base/BaseButtonIcon';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            BaseDownloadLinkIcon,
            BaseButtonIcon
        },
        computed: {
            ...mapGetters([
                'isAuthenticated'
            ])

        },
        methods: {
            openNav () {
                eventBus.openNav();
            },
            openAuth () {
                eventBus.openAuth();
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
    justify-content: flex-end;
    width: 30%;
}
</style>