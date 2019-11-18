<template>
  <div class="about">
    <p class="page-header">About me</p>
    <h1>
      <span class="focus">Responsive site</span> , mobile and desktop
    </h1>
    <p
      class="mb-4"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et eaque vel repellendus tempore ipsa cum aliquid saepe. Atque et qui repellat aliquid autem quibusdam error nihil possimus velit molestiae!</p>
    <app-skills></app-skills>
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
@import "../style/views/about.scss";
</style>
