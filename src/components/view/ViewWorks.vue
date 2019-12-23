<template>
  <div
    id="works"
    :class="$style['works']"
  >
    <BaseHeadingView :heading-text="$t('works.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('works.title')" />
    <div
      id="worksContent"
      :class="$style['content']"
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

  position: absolute;
  top: 0;
  left: 0; // to have justified center with margin auto
  right: 0; // to have justified center with margin auto
  bottom: 0;
  padding: var(--site-wrap-padding);
  width: var(--works-width);
  box-sizing: border-box;
  margin: 0 auto;
  height: var(--works-height);
  display: var(--works-display);
  align-items: center;
}
.content{
  padding-bottom: 2em;
}
</style>