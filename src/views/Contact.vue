<template>
  <div class="contact">
    <div class="heading" :style="posX">
      <h1>contact</h1>
    </div>
    <div class="content">
      <h3>Get in touch</h3>
      <app-contact-info></app-contact-info>
    </div>
    <!-- <app-page-links /> -->
  </div>
</template>
<script>
import { setPosX, windowResizeHandler } from '@/helpers';
import ContactInfo from '@/components/ContactInfo';
// import PageLinks from '@/components/PageLinks';

export default {
  data () {
    return {
      posX: null
    };
  },
  created () {
    // set/keep the heading (h1) dots to the left aligning with the logo
    this.posX = setPosX('left');

    window.addEventListener('resize', evt => {
      this.posX = windowResizeHandler(evt, 'left');
    });
  },
  mounted () {
    document.querySelector('#site-wrap').scroll({
      left: 0,
      top: 0
    });
  },
  destroyed () {
    window.removeEventListener('resize');
  },
  components: {
    appContactInfo: ContactInfo
    // appPageLinks: PageLinks
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/contact.scss";
</style>
