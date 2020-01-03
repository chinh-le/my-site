<template>
  <div :class="$style['signin-nav']">
    <BaseDownloadLinkIcon v-if="isAuthenticated" />
    <BaseButtonIcon
      v-if="!isAuthenticated"
      :btn-class="'btn-signin'"
      :btn-title="$t('buttons.authenticate')"
      :btn-handler="openAuth"
      :btn-icon="'person_outline'"
    />
    <BaseButtonIcon
      v-else
      :btn-class="'btn-signout'"
      :btn-title="$t('buttons.signout')"
      :btn-handler="signout"
      :btn-icon="'person'"
    />
    <BaseButtonIcon
      :btn-class="'btn-nav'"
      :btn-title="$t('buttons.navigate')"
      :btn-handler="openNav"
      :btn-icon="'dehaze'"
    />
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { _signout } from '@/firebase';
    import { _eventBus } from '@/utils/eventBus';
    import BaseDownloadLinkIcon from './base/BaseDownloadLinkIcon';
    import BaseButtonIcon from './base/BaseButtonIcon';

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
                _eventBus.openNav();
            },
            openAuth () {
                _eventBus.openAuth();
            },
            signout () {
                _signout();
            }
        }
    };
</script>

<style lang="scss" module>
.signin-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
}
</style>