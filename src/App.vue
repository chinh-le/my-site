<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>
<script>
// @ is an alias to /src
import { init, onStateChange } from '@/firebase';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  beforeCreate () {
    init(); // set firebase config
    onStateChange(); // authentication state observer
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
