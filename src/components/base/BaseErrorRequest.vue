<template>
  <p :class="$style['error-request']">
    Oops! There's something wrong with our server.
    <span>[{{ errorCode }}]</span>
    <br>Please try again later.
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