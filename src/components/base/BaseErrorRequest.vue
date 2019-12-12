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
                default () {
                    return null;
                }
            }
        }
    }
</script>

<style lang="scss" module>
.error-request {
    color: $color-txt-error-request;
    padding: 2em;
    > span {
      color: $color-unfocus;
    }
}
</style>