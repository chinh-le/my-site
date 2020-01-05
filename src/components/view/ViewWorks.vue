<template>
  <div
    id="works"
    :class="$style['works']"
  >
    <BaseHeadingView :heading-text="$t('works.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('works.title')" />
    <div
      id="worksContent"
      :class="$style['works-content']"
    >
      <AppProfessionals />
      <AppPersonals />
    </div>
  </div>
</template>

<script>
    import BaseHeadingView from '../base/BaseHeadingView';
    import BaseHeadingViewSidebar from '../base/BaseHeadingViewSidebar';
    import AppProfessionals from '../AppProfessionals';
    import AppPersonals from '../AppPersonals';

    export default {
        components: {
            BaseHeadingView,
            BaseHeadingViewSidebar,
            AppProfessionals,
            AppPersonals
        }
    };
</script>

<style lang="scss" module>
.works {
  --heading1-first-letter: normal;

  padding: var(--site-wrap-padding);
  width: var(--works-width);
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: var(--works-height);
}
</style>