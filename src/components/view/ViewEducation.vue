<template>
  <div
    id="education"
    :class="$style['education']"
  >
    <BaseHeadingView :heading-text="$t('education.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('education.title')" />
    <div :class="$style['content']">
      <AppCertificates />
      <AppScholarships />
    </div>
  </div>
</template>

<script>
    import BaseHeadingView from '../base/BaseHeadingView';
    import BaseHeadingViewSidebar from '../base/BaseHeadingViewSidebar';
    import AppCertificates from '../AppCertificates';
    import AppScholarships from '../AppScholarships';

    export default {
        components: {
            BaseHeadingView,
            BaseHeadingViewSidebar,
            AppCertificates,
            AppScholarships
        }
    };

</script>

<style lang="scss" module>
.education {
  --heading1-first-letter: normal;

  position: absolute;
  top: 0;
  left: 0; // to have justified center with margin auto
  right: 0; // to have justified center with margin auto
  // bottom: 0;
  padding: var(--site-wrap-padding);
  width: var(--education-width);
  box-sizing: border-box;
  margin: 0 auto;
}
.content {}
</style>