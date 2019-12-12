<template>
  <div
    id="app"
    class="app"
  >
    <!-- <img src="@/assets/shutterstock-education.jpg" alt class="body-img-bg" /> -->
    <TheHeader />
    <!-- <main :class="$style['site-wrap']"> -->
    <main class="site-wrap">
      <transition
        name="fading"
        mode="out-in"
      >
        <router-view />
      </transition>
    </main>
    <TheFooter />
    <AppNavigate />
    <AppAuthenticate />
    <AppNavigateLinksSidebar />
  </div>
</template>

<script>
    // @ is an alias to /src
    import { clearAllBodyScrollLocks } from 'body-scroll-lock';
    import { init, onStateChange } from '@/firebase';
    import TheHeader from '@/components/TheHeader';
    import TheFooter from '@/components/TheFooter';
    import AppNavigate from '@/components/AppNavigate';
    import AppAuthenticate from '@/components/AppAuthenticate';
    import AppNavigateLinksSidebar from '@/components/AppNavigateLinksSidebar';

    export default {
        components: {
            AppNavigateLinksSidebar,
            AppAuthenticate,
            AppNavigate,
            TheHeader,
            TheFooter,
        },
        watch: {
            $route () {
                clearAllBodyScrollLocks();
            }
        },
        beforeCreate () {
            init(); // set firebase config
            onStateChange(); // authentication state observer
        }
    };
</script>

<style lang="scss" scoped>
.app {
  z-index: $z-index-app; //2;
}
.site-wrap {
  position: relative;
  top: var(--site-header-height);
  z-index: $z-index-site-wrap; //4;
  padding: 0 $padd-container var(--site-footer-height);
  box-sizing: border-box;
}
@include fading-helper;
</style>
