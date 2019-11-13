<template>
  <div class="works">
    <h1>This is works page</h1>
  </div>
</template>
<script>
import { recaptchaPage } from '@/recaptcha';

export default {
  created () {
    console.log('works - created  ');
    recaptchaPage('works');
  }
};
</script>
