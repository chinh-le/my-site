<template>
  <div
    id="education"
    :class="$style['education']"
  >
    <BaseHeadingSidebar :heading-text="$t('education.title')" />
    <div :class="$style['content']">
      <AppCertificates />
      <AppScholarships />
    </div>
  </div>
</template>

<script>
    import BaseHeadingSidebar from '../base/BaseHeadingSidebar';
    import AppCertificates from '../AppCertificates';
    import AppScholarships from '../AppScholarships';

    export default {
        components: {
            BaseHeadingSidebar,
            AppCertificates,
            AppScholarships
        }
    };

</script>

<style lang="scss" module>
.education {
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
.content {
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
}
</style>