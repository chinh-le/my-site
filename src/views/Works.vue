<template>
  <div class="works">
    <div class="heading" :style="posX">
      <h1 id="works">works</h1>
    </div>
    <div class="content">
      <app-professionals />
      <app-personals />
    </div>
  </div>
</template>
<script>
import { setPosX, windowResizeHandler } from '@/helpers';
import Professionals from '@/components/Professionals';
import Personals from '@/components/Personals';

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
    // console.log('TLC: Works -> beforeDestroy');
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler (evt) {
      this.posX = windowResizeHandler(evt, 'left');
    }
  },
  components: {
    appProfessionals: Professionals,
    appPersonals: Personals
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/works.scss";
</style>
