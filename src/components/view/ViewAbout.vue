<template>
  <div
    id="about"
    :class="$style['about']"
  >
    <BaseHeadingSidebar :heading-text="$t('about.title')" />
    <div
      id="aboutContent"
      :class="$style['content']"
    >
      <BaseAboutDesc />
      <AppSkills />
    </div>
  </div>
</template>

<script>
    import BaseAboutDesc from '../base/BaseAboutDesc';
    import AppSkills from '../AppSkills';
    import BaseHeadingSidebar from '../base/BaseHeadingSidebar';

    export default {
        components: {
            BaseAboutDesc,
            BaseHeadingSidebar,
            AppSkills
        }
    };
</script>

<style lang="scss" module>
.about {
  position: absolute;
  top: 0;
  left: 0; // to have justified center with margin auto
  right: 0; // to have justified center with margin auto
  bottom: 0;
  padding: var(--site-wrap-padding);
  width: var(--about-width);
  box-sizing: border-box;
  margin: 0 auto;
  height: var(--about-height);
}
.content {
  padding-bottom: 2em;
}
</style>