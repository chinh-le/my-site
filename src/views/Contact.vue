<template>
  <div class="contact">
    <h1>contact</h1>
    <div class="content">
      <h3>Get in touch</h3>
      <app-contact-info></app-contact-info>
    </div>
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
