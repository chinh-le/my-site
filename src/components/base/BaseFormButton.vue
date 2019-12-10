<template>
  <button
    :class="$style['btn']"
    :type="btnType"
    :title="btnTitle"
    role="button"
  >
    {{ btnLabel }}
  </button>
</template>

<script>
    export default {
        props: {
            btnLabel: {
                type: String,
                default () {
                    return 'button';
                }
            },
            btnType: {
                type: String,
                default () {
                    return 'button';
                }
            },
            btnTitle: {
                type: String,
                default () {
                    return '';
                }
            },
        }
    }
</script>

<style lang="scss" module>
.btn {
    font-size: 1em;
    padding: $form-input-button-padding;
    border-radius: $form-input-border-radius;
    text-transform: capitalize;
}
</style>