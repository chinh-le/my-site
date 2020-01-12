<template>
  <div :class="$style['signin-nav']">
    <AppDownloadResume
      v-if="isAuthenticated"
      :tabindex="tabIndex.siteAction[0]"
    />
    <BaseButtonIcon
      v-if="!isAuthenticated"
      :btn-class="'btn-signin'"
      :btn-title="$t('buttons.authenticate')"
      :click-handler="openAuth"
      :btn-icon="'person_outline'"
      :tabindex="tabIndex.siteAction[3]"
    />
    <BaseButtonIcon
      v-else
      :btn-class="'btn-signout'"
      :btn-title="$t('buttons.signout')"
      :click-handler="signout"
      :btn-icon="'person'"
      :tabindex="tabIndex.siteAction[4]"
    />
    <BaseButtonIcon
      :btn-class="'btn-nav'"
      :btn-title="$t('buttons.navigate')"
      :click-handler="openNav"
      :btn-icon="'dehaze'"
      :tabindex="tabIndex.siteAction[5]"
    />
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { _signout } from '@/firebase';
    import { _eventBus } from '@/utils/eventBus';
    import { _tabIndex } from '@/utils/tabIndex';
    import BaseButtonIcon from './base/BaseButtonIcon';
    import AppDownloadResume from './AppDownloadResume';

    export default {
        components: {
            AppDownloadResume,
            BaseButtonIcon
        },
        data () {
            return {
                tabIndex: _tabIndex
            };
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