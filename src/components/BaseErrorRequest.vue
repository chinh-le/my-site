<template>
  <p
    v-if="isErrorRequest"
    :class="$atyle.errorRequest"
  >
    Oops! There's something wrong with our server.
    <span>[{{ isErrorRequest }}]</span>
    <br>Please try again later.
  </p>
</template>

<script>
    export default {
        props: {
            isErrorRequest: {
                type: Boolean,
                default () {
                    return false;
                }
            }
        }
    }
</script>

<style lang="scss" module>
.errorRequest {
    @include error-request;
}
</style>