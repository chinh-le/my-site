<template>
  <div class="services">
    <h1>This is services page</h1>
  </div>
</template>
<script>
import { recaptchaPage } from '@/recaptcha';

export default {
  created () {
    console.log('services - created  ');
    recaptchaPage('services');
  }
};
</script>
