<template>
  <div
    id="app"
    :style="{height: winHeight + 'px'}"
    >
    <app-header />
    <router-view />
    <app-footer />
    <!-- <app-navigation
      :show="showNav"
      :cb="toggleNav"
      /> -->
    <!-- <app-navigation :elem-height="winHeight" /> -->
    <app-navigation />
  </div>
</template>
<script>
// @ is an alias to /src
import { init, onStateChange } from '@/firebase';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Navigation from './components/Navigation';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appNavigation: Navigation
  },
  data () {
    return {
      winHeight: 500
    };
  },
  beforeCreate () {
    // console.log('beforeCreate');
    init(); // set firebase config
    onStateChange(); // authentication state observer
  },
  created () {
    this.winHeight = window.innerHeight;
    window.addEventListener('resize', this.resizeHandler);
  },
  destroyed () {
    window.removeEventListener('resize');
  },
  methods: {
    resizeHandler (evt) {
      this.winHeight = evt.currentTarget.innerHeight;
    }
  }
};
</script>
<style lang="scss">
/* #app {
  height: 700px;
} */
</style>
