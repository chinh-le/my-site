<template>
  <p :class="$style['error-request']">
    Oops! {{ $t('errors.server-request.text-1') }}.
    <span>[{{ errorCode }}]</span>
    <br>{{ $t('errors.server-request.text-2') }}.
  </p>
</template>

<script>
    export default {
        props: {
            errorCode: {
                type: String,
                default: () => ''
            }
        }
    }
</script>

<style lang="scss" module>
.error-request {
    color: $error-request-txt-color;
    padding: 2em;
    > span {
      color: $dimlight-color;
    }
}
</style>