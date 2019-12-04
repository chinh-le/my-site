<template>
  <div class="education">
    <div class="heading" :style="posX">
      <h1>Education</h1>
    </div>
    <div class="content">
      <app-certificates />
      <app-scholarships />
    </div>
    <!-- <app-page-links /> -->
  </div>
</template>
<script>
import { setPosX, windowResizeHandler } from '@/helpers';
import Certificates from '@/components/Certificates';
import Scholarships from '@/components/Scholarships';
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
    appCertificates: Certificates,
    appScholarships: Scholarships
    // appPageLinks: PageLinks
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/education.scss";
</style>
