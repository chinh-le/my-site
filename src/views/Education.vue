<template>
  <div class="education">
    <div class="heading">
      <h1>Education</h1>
    </div>
    <div class="content">
      <app-certificates />
      <app-scholarships />
    </div>
    <!-- <app-page-links /> -->
  </div>
</template>
<script>
import Certificates from '@/components/Certificates';
import Scholarships from '@/components/Scholarships';
// import PageLinks from '@/components/PageLinks';

export default {
  components: {
    appCertificates: Certificates,
    appScholarships: Scholarships
    // appPageLinks: PageLinks
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/education.scss";
</style>
