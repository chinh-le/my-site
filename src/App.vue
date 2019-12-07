<template>
  <div id="app">
    <!-- <img src="@/assets/shutterstock-education.jpg" alt class="body-img-bg" /> -->
    <TheHeader />
    <main
      id="site-wrap"
      class="site-wrap"
    >
      <transition
        name="fading"
        mode="out-in"
      >
        <router-view />
      </transition>
    </main>
    <TheFooter />
    <AppNavigation />
    <AppAuthentication />
    <AppPageLinks />
  </div>
</template>

<script>
    // @ is an alias to /src
    import { clearAllBodyScrollLocks } from 'body-scroll-lock';
    import { init, onStateChange } from '@/firebase';
    import TheHeader from '@/components/TheHeader';
    import TheFooter from '@/components/TheFooter';
    import AppNavigation from '@/components/AppNavigation';
    import AppAuthentication from '@/components/AppAuthentication';
    import AppPageLinks from '@/components/AppPageLinks';

    export default {
        components: {
            TheHeader,
            TheFooter,
            AppNavigation,
            AppAuthentication,
            AppPageLinks
        },
        watch: {
            $route (fr, to) {
                clearAllBodyScrollLocks();
            }
        },
        beforeCreate () {
            init(); // set firebase config
            onStateChange(); // authentication state observer
        },
        created () { },
        beforeMount () { },
        mounted () { },
        beforeUpdate () { },
        updated () { },
        beforeDestroyed () { },
        destroyed () { }
    };
</script>

<style scoped lang="scss">
#app {
  z-index: $z-index-app; //2;
  > .page-links {
    z-index: $z-index-app-page-links; //5
  }
}
.site-wrap {
  position: relative;
  top: var(--site-header-height);
  z-index: $z-index-site-wrap; //4;
  padding: 0 $padd-container var(--site-footer-height);
  box-sizing: border-box;
}

@include bg-canvas;
@include fading-helper;
@include slide-helper;
</style>
