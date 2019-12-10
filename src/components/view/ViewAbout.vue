<template>
  <div class="about">
    <BaseHeadingSidebar :heading-text="'about me'" />
    <div class="content">
      <div class="desc">
        <h2 :class="$style['heading-2']">
          <span :class="$style['color-focus']">Responsive site</span>, mobile and desktop
        </h2>
        <p :class="$style['text']">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et eaque vel
          repellendus tempore ipsa cum aliquid saepe. Atque et qui repellat aliquid autem quibusdam error
          nihil possimus velit molestiae!
        </p>
      </div>
      <AppSkills />
    </div>
  </div>
</template>

<script>
    import AppSkills from '../AppSkills';
    import BaseHeadingSidebar from '../base/BaseHeadingSidebar';

    export default {
        components: {
            BaseHeadingSidebar,
            AppSkills
        }
    };
</script>

<style lang="scss" module>
.color-focus {
    @include color-focus;
}
.heading-2 {
    margin-bottom: 1em;
}
.text {
  margin-bottom: 4em;
}
</style>