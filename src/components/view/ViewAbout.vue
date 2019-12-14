<template>
  <div
    id="about"
    :class="$style['about']"
  >
    <BaseHeadingView :heading-text="$t('about.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('about.title')" />
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
    import BaseHeadingView from '../base/BaseHeadingView';
    import BaseHeadingViewSidebar from '../base/BaseHeadingViewSidebar';

    export default {
        components: {
            BaseAboutDesc,
            BaseHeadingView,
            BaseHeadingViewSidebar,
            AppSkills
        }
    };
</script>

<style lang="scss" module>
.about {
  --heading1-first-letter: normal;

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