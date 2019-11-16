<template>
  <div class="contact">
    <p class="unfocus">Get in touch</p>
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
.contact {
  > p {
    &.unfocus {
      margin-bottom: 2em;
    }
  }
}
</style>
