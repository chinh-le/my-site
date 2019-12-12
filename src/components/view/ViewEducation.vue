<template>
  <div class="education">
    <BaseHeadingSidebar :heading-text="$t('education.title')" />
    <div class="content">
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

<style lang="scss" module></style>