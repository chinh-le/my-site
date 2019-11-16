<template>
  <div class="home">
    <p class="unfocus">Welcome to my personal site</p>
    <h1>
      <span class="focus">Hello</span> My name is Chinh Le
    </h1>
    <!-- <h1>Hi! My name is Chinh Le</h1> -->
    <p class="line focus">___</p>
  </div>
</template>

<script>
import { recaptchaPage } from '@/recaptcha';

export default {
  created () {
    // console.log('home - created  ');
    recaptchaPage('home');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
