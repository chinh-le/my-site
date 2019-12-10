<template>
  <p :class="$style['recaptcha']">
    This site is protected by reCAPTCHA and the Google
    <a
      :class="$style['recaptcha-link']"
      href="https://policies.google.com/privacy"
    >Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
  </p>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" module>
.recaptcha {
  font-size: 0.7em;
  line-height: 1.3em;
  color: $color-txt-footnote;
}
.recaptcha-link {
  color: $color-txt-footnote-links;
}
</style>