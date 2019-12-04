<template>
  <div class="about">
    <div class="heading" :style="posX">
      <h1>About me</h1>
    </div>
    <div class="content">
      <div class="desc">
        <h2>
          <span class="color-focus">Responsive site</span>, mobile and desktop
        </h2>
        <p
          class="mb-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et eaque vel repellendus tempore ipsa cum aliquid saepe. Atque et qui repellat aliquid autem quibusdam error nihil possimus velit molestiae!</p>
      </div>
      <app-skills></app-skills>
    </div>
  </div>
</template>
<script>
import { setPosX, windowResizeHandler } from '@/helpers';
import Skills from '@/components/Skills';

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
    // console.log('TLC: About -> beforeDestroy');
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler (evt) {
      this.posX = windowResizeHandler(evt, 'left');
    }
  },
  components: {
    appSkills: Skills
  }
};
</script>
<style scoped lang="scss">
@import "../styles/views/about.scss";
</style>
