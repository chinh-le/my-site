<template>
  <!-- <div id="app" :style="{height: siteWrapHeight + 'px'}"> -->
  <div id="app">
    <!-- <img src="@/assets/shutterstock-education.jpg" alt class="body-img-bg" /> -->
    <app-header />
    <!-- <main class="site-wrap" :style="{height: siteWrapHeight}" id="site-wrap"> -->
    <main class="site-wrap" id="site-wrap">
      <transition name="fading" mode="out-in">
        <router-view />
      </transition>
    </main>
    <app-footer />
    <app-navigation />
    <app-authentication />
    <app-page-links />
  </div>
</template>
<script>
// @ is an alias to /src
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { init, onStateChange } from '@/firebase';
// import { scrollTo } from '@/js/helpers';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import Authentication from '@/components/authentication/Authentication.vue';
import PageLinks from '@/components/pageLinks/PageLinks.vue';

export default {
  /* beforeRouteEnter (to, from, next) {
    next(
      (() => {
        scrollTo({
          x: 0,
          y: 0
        });
      })()
    );
  }, */
  components: {
    appHeader: Header,
    appFooter: Footer,
    appNavigation: Navigation,
    appAuthentication: Authentication,
    appPageLinks: PageLinks
  },
  data () {
    return {
      siteWrapHeight: '',
      siteWrapSelector: null,
      siteHeaderSelector: null
    };
  },
  beforeCreate () {
    init(); // set firebase config
    onStateChange(); // authentication state observer
  },
  created () {
    // /* console.log(
    // 'TLC: created -> document.body.clientHeight',
    // document.body.clientHeight
    // ); */
    /* if (document.body.clientHeight < window.innerHeight) {
      this.siteWrapHeight = window.innerHeight;
    } */
    // this.siteWrapHeight = window.innerHeight;
    // window.addEventListener('resize', this.resizeHandler);
  },
  beforeMount () {
    // console.log('app - beforeMount');
    // console.dir(window);
    // console.dir(document.body.clientHeight);
  },
  mounted () {
    // console.log('TLC: mounted -> ', document.body.clientHeight);
    // this.siteWrapSelector = document.querySelector('#site-wrap');
    // this.siteHeaderSelector = document.querySelector('#site-header');
    // this.setSiteWrapInlineStyle();
  },
  beforeUpdate () {
    // console.log('app - beforeUpdate');
  },
  updated () {
    // console.log('app - updated');
  },
  beforeDestroyed () {
    // console.log('app - beforeDestroyed');
  },
  destroyed () {
    // console.log('app - destroyed');
    // window.removeEventListener('resize');
  },
  watch: {
    $route (fr, to) {
      // // // console.log('TLC: App - watch $route -> fr', fr);
      // // // console.log('TLC: App - watch $route -> to', to);
      clearAllBodyScrollLocks();
    }
  },
  methods: {
    setSiteWrapInlineStyle (_height) {
      const inlineStyle = {
        top: this.siteHeaderSelector.offsetHeight + 'px',
        height: _height + 'px'
      };
      this.siteWrapSelector.setAttribute(
        'style',
        'top: ' + inlineStyle.top + ';height: ' + inlineStyle.height
      );
    },
    resizeHandler (evt) {
      // console.log(
      // 'TLC: resizeHandler -> document.body.clientHeight ',
      // document.body.clientHeight
      // );
      // console.log(
      // 'TLC: resizeHandler -> evt.currentTarget.innerHeight',
      // evt.currentTarget.innerHeight
      // );
      if (document.body.clientHeight < evt.currentTarget.innerHeight) {
        // this.siteWrapHeight = evt.currentTarget.innerHeight;
        this.setSiteWrapInlineStyle(evt.currentTarget.innerHeight);
      }
    }
  }
};
</script>
<style scoped lang="scss">
#app {
  // position: relative;
  // width: 100%;
  // height: 100%;
  z-index: $z-index-app; //2;
  > .page-links {
    z-index: $z-index-app-page-links; //5
  }
}

/* .body-img-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: $z-index-body-img-bg;//3;
    width: 100%;
    height: auto;
    opacity: 0.2;
} */

.site-wrap {
  position: relative;
  top: var(--site-header-height);
  z-index: $z-index-site-wrap; //4;
  // padding: var(--site-header-height) $padd-container $padd-container;
  padding: 0 $padd-container var(--site-footer-height);
  // overflow-y: scroll;
  box-sizing: border-box;
}

@include bg-canvas;
@include fading-helper;
@include slide-helper;
/* .animating-enter-active {
    animation: slideIn .3s ease-in;
}
.animating-leave-active {
    animation: slideOut .8s ease-in;
}
@keyframes slideIn {
    from {
      transform: translatey(700px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
}
@keyframes slideOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-700px);
    opacity: 0;
  }
}
 */
</style>
