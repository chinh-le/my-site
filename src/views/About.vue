<template>
  <div class="about">
    <p class="unfocus">About me</p>
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
$body-padding: 1em;

h1 {
  margin: 1em 0;
}
h2 {
  margin: 2em 0 1em;
}
h6 {
  font-size: 1em;
}
.about {
  padding: $body-padding;
}
</style>
