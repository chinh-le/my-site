<template>
  <div
    id="app"
    class="app"
  >
    <!-- <img src="@/assets/shutterstock-education.jpg" alt class="body-img-bg" /> -->
    <TheHeader />
    <!-- <main :class="$style['site-wrap']"> -->
    <main
      id="siteWrap"
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
    <AppNavigate />
    <AppAuthenticate />
    <AppNavigateLinksSidebar />
  </div>
</template>

<script>
    // @ is an alias to /src
    // import { clearAllBodyScrollLocks } from 'body-scroll-lock';
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
                // clearAllBodyScrollLocks();
            }
        },
        beforeCreate () {
            init(); // set firebase config
            onStateChange(); // authentication state observer
        },
        mounted () {

            console.log(window.innerHeight);
            const elApp = document.querySelector('#siteWrap');
            const theHeader = document.querySelector('#theHeader');
            const theFooter = document.querySelector('#theFooter');
            console.log(theHeader.clientHeight);
            console.log(theFooter.clientHeight);
            elApp.setAttribute('style', `height: ${window.innerHeight - theHeader.clientHeight - theFooter.clientHeight}px`);
            
            // elApp.setAttribute('style', `height: ${window.innerHeight - theHeader.clientHeight - theFooter.clientHeight}px`);



            // const elApp = document.querySelector('#app');
            // const siteWrap = document.querySelector('#siteWrap');
            // const theFooter = document.querySelector('#theHeader');
            // const theHeader = document.querySelector('#theFooter');
            // setMainHeight(elApp, siteWrap, theHeader, theFooter);
            // window.addEventListener('resize', setMainHeight(elApp, siteWrap, theHeader, theFooter));
        },
        beforeDestroy () {
            window.removeEventListener('resize', setMainHeight);
        }
    };

    /* const setMainHeight = (el) => {
            siteWrap.setAttribute('style', `height:${window.innerHeight}px`);

    } */

    const setMainHeight = (elApp, siteWrap, theHeader, theFooter) => {
        console.log('TLC: resizeHandler -> theFooter', theFooter.clientHeight);
        console.log('TLC: resizeHandler -> theHeader', theHeader.clientHeight);
        // // console.log('TLC: resizeHandler -> siteWrap', siteWrap);
        const mainHeight = window.innerHeight - theHeader.clientHeight;
        console.log('TLC: setMainHeight -> mainHeight', mainHeight);
        siteWrap.setAttribute('style', `height: ${mainHeight}px`);
        // elApp.setAttribute('style', `background-position: center ${theHeader.clientHeight}px`);
    }; 
</script>

<style lang="scss" scoped>
.app {
  // position: relative;
  z-index: $z-index-app; //2;
width: var(--app-width);
margin: 0 auto;

  // background-image: url('./assets/shutterstock_1135600613.jpg');
  // background-image: url('./assets/PC081050.jpg');
  // background-image: url('./assets/PC081058.jpg');
  // background-image: url('./assets/PC081053.jpg');
  // background-image: url('./assets/PC081049 (1).jpg');
  // background-image: url('./assets/imageedit_1_8912521701.jpg');
  // background-image: url('./assets/PC081037.jpg');
  // background-size: cover;
  // background-position: center var(--site-header-height);
  // background-repeat: no-repeat;
  // box-sizing: border-box;
}
.site-wrap {
  position: relative;
  top: var(--site-header-height);
  z-index: $z-index-site-wrap; //4;
  // padding: 0 $padd-container var(--site-footer-height);
  // box-sizing: border-box;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-image: url('./assets/shutterstock_1135600613.jpg');
  background-size: cover;
  background-position: center center;
  // background-position: center var(--site-header-height);
  background-repeat: no-repeat;
  padding: var(--site-wrap-padding);
  overflow-y: scroll;
}
@include fading-helper;
</style>
