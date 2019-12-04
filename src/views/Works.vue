<template>
  <div class="works">
    <div class="heading" :style="posX">
      <h1 id="works">works</h1>
    </div>
    <div class="content">
      <app-professionals />
      <app-personals />
    </div>
    <!-- <app-page-links /> -->
  </div>
</template>
<script>
import { setPosX, windowResizeHandler } from '@/helpers';
import Professionals from '@/components/Professionals';
import Personals from '@/components/Personals';
// import PageLinks from '@/components/PageLinks';

export default {
  data () {
    return {
      posX: null
    };
  },
  created () {
    // set/keep the heading (h1) dots to the left aligning with the logo
    this.posX = setPosX('left');

    window.addEventListener('resize', evt => {
      this.posX = windowResizeHandler(evt, 'left');
    });
  },
  destroyed () {
    window.removeEventListener('resize');
  },
  components: {
    appProfessionals: Professionals,
    // appPageLinks: PageLinks,
    appPersonals: Personals
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/works.scss";
</style>
