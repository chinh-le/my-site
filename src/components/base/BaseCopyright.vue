<template>
  <div :class="$style['copyright']">
    <span>&copy; chinhle.ca 2020.</span>
    <span>{{ $t('copyright') }}.</span>
  </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" module>
.copyright {
  font-size: 0.7em;
  color: $dimlight-color;
  line-height: 1.2em;
  padding: 0.5em 0;
  text-align: center;
  order: var(--the-footer-copyright-order);
  > span {
    padding-right: 0.5em;
  }
}
</style>