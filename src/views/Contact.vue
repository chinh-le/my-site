<template>
  <div class="contact">
    <div class="heading">
      <h1>contact</h1>
    </div>
    <div class="content">
      <h3>Get in touch</h3>
      <app-contact-info></app-contact-info>
    </div>
    <app-page-links />
  </div>
</template>
<script>
import ContactInfo from '@/components/ContactInfo';
import PageLinks from '@/components/PageLinks';

export default {
  components: {
    appContactInfo: ContactInfo,
    appPageLinks: PageLinks
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/contact.scss";
</style>
