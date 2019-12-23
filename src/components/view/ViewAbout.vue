<template>
  <div
    id="about"
    :class="$style['about']"
  >
    <BaseHeadingView :heading-text="$t('about.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('about.title')" />
    <transition
      name="slide-fade"
      mode="out-in"
      :enter-class="$style['slide-fade-enter']"
      :enter-to-class="$style['slide-fade-enter-to']"
      :enter-active-class="$style['slide-fade-enter-active']"
      :leave-class="$style['slide-fade-leave']"
      :leave-to-class="$style['slide-fade-leave-to']"
      :leave-active-class="$style['slide-fade-leave-active']"
    >
      <div
        v-if="isAnimated"
        id="aboutContent"
        :class="$style['content']"
      >
        <BaseAboutDesc />
      <!-- <AppSkills /> -->
      </div>
    </transition>
  </div>
</template>

<script>
    import BaseAboutDesc from '../base/BaseAboutDesc';
    // import AppSkills from '../AppSkills';
    import BaseHeadingView from '../base/BaseHeadingView';
    import BaseHeadingViewSidebar from '../base/BaseHeadingViewSidebar';

    export default {
        components: {
            BaseAboutDesc,
            BaseHeadingView,
            BaseHeadingViewSidebar,
            // AppSkills
        },
        data () {
            return {
                isAnimated: false
            };
        },
        mounted () {
            this.isAnimated = true;
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
@include slide-fade-helper('enter');
</style>