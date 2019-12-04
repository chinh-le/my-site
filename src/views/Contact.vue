<template>
  <div class="contact">
    <div class="heading" :style="posX">
      <h1>contact</h1>
    </div>
    <div class="content">
      <h3>Get in touch</h3>
      <app-contact-info></app-contact-info>
    </div>
  </div>
</template>
<script>
import { setPosX, windowResizeHandler } from '@/helpers';
import ContactInfo from '@/components/ContactInfo';

export default {
  data () {
    return {
      posX: null
    };
  },
  created () {
    // set/keep the heading (h1) to the left aligning with the logo
    this.posX = setPosX('left');

    window.addEventListener('resize', this.resizeHandler);
  },
  mounted () {
    document.querySelector('#site-wrap').scroll({
      left: 0,
      top: 0
    });
  },
  beforeDestroy () {
    // console.log('TLC: Contact -> beforeDestroy');
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler (evt) {
      this.posX = windowResizeHandler(evt, 'left');
    }
  },
  components: {
    appContactInfo: ContactInfo
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/contact.scss";
</style>
