<template>
  <div class="contact">
    <h1>This is contact page</h1>
  </div>
</template>
<script>
import { recaptchaPage } from '@/recaptcha';

export default {
  created () {
    console.log('contact - created  ');
    recaptchaPage('contact');
  }
};
</script>
