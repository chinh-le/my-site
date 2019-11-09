<template>
  <div class="home">
    <h1>Welcome to my personal site</h1>
    <p>My name is Chinh Le</p>
    <p>Frontend Web Developer experienced with Vue, React and Angular Javascript libraries/frameworks</p>
  </div>
</template>

<script>
import { recaptchaPage } from '@/recaptcha';

export default {
  created () {
    console.log('home - created  ');
    recaptchaPage('home');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
