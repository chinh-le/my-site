<template>
  <!-- <div id="app" :style="{height: winHeight + 'px'}"> -->
  <div id="app">
    <app-header />
    <main class="site-wrap">
      <router-view />
    </main>
    <app-footer />
    <nav class="site-nav">
      <app-navigation />
    </nav>
    <app-authentication></app-authentication>
  </div>
</template>
<script>
// @ is an alias to /src
import { init, onStateChange } from '@/firebase';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Navigation from './components/Navigation';
import Authentication from './components/Authentication';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appNavigation: Navigation,
    appAuthentication: Authentication
  },
  data () {
    return {
      winHeight: ''
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
    /* if (document.body.clientHeight < window.innerHeight) {
      this.winHeight = window.innerHeight;
    }
    // this.winHeight = window.innerHeight;
    window.addEventListener('resize', this.resizeHandler); */
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
  methods: {
    /* resizeHandler (evt) {
      // this.winHeight = evt.currentTarget.innerHeight;
      if (document.body.clientHeight < evt.currentTarget.innerHeight) {
        this.winHeight = evt.currentTarget.innerHeight;
      }
    } */
  }
  /* watch: {
    $route (fr, to) {
      console.log('to: ', to);
      // this.winHeight = null;
      document.getElementById('app').style.height = null;
      console.log(window.innerHeight);
      console.log(document.body.clientHeight);
      console.log(
        'document.body.clientHeight < window.innerHeight: ',
        document.body.clientHeight < window.innerHeight
      );
    }
  } */
};
</script>
<style lang="scss">
</style>
