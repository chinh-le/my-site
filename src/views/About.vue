<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { recaptchaPage } from '@/recaptcha';

export default {
  created () {
    console.log('about - created  ');
    recaptchaPage('about');
  }
};
</script>
