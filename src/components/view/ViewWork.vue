<template>
  <div
    id="work"
    :class="$style['work']"
  >
    <BaseHeadingView :heading-text="$t('work.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('work.title')" />
    <div
      id="workContent"
      :class="$style['work-content']"
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
.work {
  --heading1-first-letter: normal;

  padding: var(--site-wrap-padding);
  width: var(--work-width);
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: var(--work-height);
}
</style>