<template>
  <div class="about">
    <h1>About me</h1>
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
import Skills from '@/components/Skills';

export default {
  components: {
    appSkills: Skills
  }
};
</script>
<style scoped lang="scss">
@import "../styles/views/about.scss";
</style>
