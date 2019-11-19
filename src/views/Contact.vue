<template>
  <div class="contact">
    <h1>contact</h1>
    <h3>Get in touch</h3>
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
@import "../styles/views/contact.scss";
</style>
