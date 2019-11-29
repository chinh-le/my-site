<template>
  <!-- <div id="app" :style="{height: winHeight + 'px'}"> -->
  <div id="app">
    <img src="@/assets/shutterstock-education.jpg" alt class="body-img-bg" />
    <app-header />
    <main class="site-wrap" :style="{height: winHeight + 'px'}" id="site-wrap">
      <transition name="fading" mode="out-in">
        <!-- <transition name="animating" mode="out-in"> -->
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Navigation from './components/Navigation';
import Authentication from './components/Authentication';
import PageLinks from './components/PageLinks';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appNavigation: Navigation,
    appAuthentication: Authentication,
    appPageLinks: PageLinks
  },
  data () {
    return {
      winHeight: '',
      siteWrapSelector: null,
      siteHeaderSelector: null
    };
  },
  beforeCreate () {
    // console.log('app - beforeCreate');
    // console.dir(window);
    // console.log(window.innerHeight);
    // console.log(document.body.clientHeight);
    /* console.log(
      'document.body.clientHeight < window.innerHeight: ',
      document.body.clientHeight < window.innerHeight
    ); */
    /* if (document.body.clientHeight < window.innerHeight) {
      this.winHeight = window.innerHeight;
    } */

    init(); // set firebase config
    onStateChange(); // authentication state observer
  },
  created () {
    // console.log('app - created');
    // console.dir(window);
    // console.dir(document.body.clientHeight);

    if (document.body.clientHeight < window.innerHeight) {
      this.winHeight = window.innerHeight;
    }
    // this.winHeight = window.innerHeight;
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeMount () {
    // console.log('app - beforeMount');
    // console.dir(window);
    // console.dir(document.body.clientHeight);
  },
  mounted () {
    // console.log('app - mounted');
    // console.dir(window);
    // console.dir(document.body.clientHeight);

    /* console.log(
      'TLC: created -> document.querySelector("#site-header") ',
      document.querySelector('#site-header').offsetHeight
    ); */
    this.siteWrapSelector = document.querySelector('#site-wrap');
    // this.siteWrapSelector = document.getElementById('site-wrap');
    // console.log('TLC: mounted -> this.siteWrapSelector', this.siteWrapSelector);
    this.siteHeaderSelector = document.querySelector('#site-header');
    // this.siteHeaderSelector = document.getElementById('site-header');
    /* console.log(
      'TLC: mounted -> this.siteHeaderSelector',
      this.siteHeaderSelector
    ); */
    this.setInlineStyle();
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
    window.removeEventListener('resize');
  },
  watch: {
    $route (fr, to) {
      // console.log('TLC: App - watch $route -> fr', fr);
      // console.log('TLC: App - watch $route -> to', to);
      clearAllBodyScrollLocks();
    }
  },
  methods: {
    setInlineStyle () {
      // this.siteWrapSelector.style.width = this.siteHeaderSelector.offsetHeight;
      this.siteWrapSelector.style.top =
        this.siteHeaderSelector.offsetHeight + 'px';
    },
    resizeHandler (evt) {
      // this.winHeight = evt.currentTarget.innerHeight;
      if (document.body.clientHeight < evt.currentTarget.innerHeight) {
        this.winHeight = evt.currentTarget.innerHeight;
      }

      this.setInlineStyle();
    }
  }
};
</script>
<style scoped lang="scss" src="@/styles/app.scss"></style>
