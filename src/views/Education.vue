<template>
  <div class="education">
    <div class="heading" :style="posX">
      <h1>Education</h1>
    </div>
    <div class="content">
      <app-certificates />
      <app-scholarships />
    </div>
  </div>
</template>
<script>
import { setPosX, windowResizeHandler } from '@/helpers';
import Certificates from '@/components/Certificates';
import Scholarships from '@/components/Scholarships';

export default {
  data () {
    return {
      posX: null
    };
  },
  created () {
    // set/keep the heading (h1) to the left aligning with the logo
    this.posX = setPosX('left');

    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy () {
    // console.log('TLC: Education -> beforeDestroy');
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler (evt) {
      this.posX = windowResizeHandler(evt, 'left');
    }
  },
  components: {
    appCertificates: Certificates,
    appScholarships: Scholarships
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/education.scss";
</style>
