<template>
  <div :class="$style['error-request-overlay-container']">
    <p :class="$style['text']">
      Oops! {{ $t('errors.server-request.text-1') }}.
      <span>[{{ errorCode }}]</span>
    </p>
    <p :class="$style['text']">
      {{ $t('errors.server-request.text-2') }}.
    </p>
  </div>
</template>

<script>
    export default {
        props: {
            errorCode: {
                type: String,
                default: () => ''
            }
        }
    };
</script>

<style lang="scss" module>
.error-request-overlay-container {
  position: relative;
  z-index: 9999;
  margin: 0 2em;
  padding: 2em;
  border-radius: 0.3em;
  background-color: rgba(0,0,0,0.9);
}
.text {
    color: $error-request-overlay-txt-color;
    margin-bottom: 1em;
    > span {
      color: $dimlight-color-dark;
    }
    &:last-child {
      margin-bottom: 0;
    }
}
</style>