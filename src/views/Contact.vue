<template>
  <div class="contact">
    <p class="page-header">contact</p>
    <h2>Get in touch</h2>
    <app-contact-info></app-contact-info>
  </div>
</template>
<script>
import ContactInfo from '@/components/ContactInfo';

export default {
  components: {
    appContactInfo: ContactInfo
  }
};
</script>
<style lang="scss" scoped>
@import "../style/views/contact.scss";
</style>
