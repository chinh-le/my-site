<template>
  <div>
    <app-logo></app-logo>
    <app-navigation></app-navigation>
  </div>
</template>
<script>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';

export default {
  components: {
    appLogo: Logo,
    appNavigation: Navigation
  }
};
</script>
