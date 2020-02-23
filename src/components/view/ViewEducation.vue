<template>
  <div
    id="education"
    :class="$style['education']"
  >
    <BaseHeadingView :heading-text="$t('education.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('education.title')" />
    <div :class="$style['education-content']">
      <AppCertificates />
      <!-- <AppScholarships /> -->
    </div>
  </div>
</template>

<script>
    import BaseHeadingView from '../base/BaseHeadingView';
    import BaseHeadingViewSidebar from '../base/BaseHeadingViewSidebar';
    import AppCertificates from '../AppCertificates';
    // import AppScholarships from '../AppScholarships';

    export default {
        components: {
            BaseHeadingView,
            BaseHeadingViewSidebar,
            AppCertificates,
            // AppScholarships
        }
    };
</script>

<style lang="scss" module>
.education {
  --heading1-first-letter: normal;

  padding: var(--site-wrap-padding);
  width: var(--education-width);
  margin: 0 auto;
  box-sizing: border-box;
  height: var(--education-height);
}
</style>