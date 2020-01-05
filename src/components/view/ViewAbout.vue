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
        :class="$style['about-content']"
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

  padding: var(--site-wrap-padding);
  width: var(--about-width);
  margin: 0 auto;
  box-sizing: border-box;
  height: var(--about-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@include slide-fade-helper('enter');
</style>