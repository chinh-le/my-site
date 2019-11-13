<template>
  <div class="resume">
    <h1>This is resume page</h1>
    <a
      v-show="downloadUrl"
      :href="downloadUrl"
      target="_blank"
      >[download icon]</a>
  </div>
</template>
<script>
import { recaptchaPage } from '@/recaptcha';

export default {
  computed: {
    downloadUrl () {
      return this.$store.getters.downloadUrl;
    }
  },
  created () {
    console.log('resume - created');
    recaptchaPage('resume');
  }
};
</script>
