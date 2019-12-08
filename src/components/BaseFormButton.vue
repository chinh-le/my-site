<template>
  <button
    :class="$style.button"
    :type="buttonType"
    :title="buttonTitle"
    role="button"
  >
    {{ buttonLabel }}
  </button>
</template>

<script>
    export default {
        props: {
            buttonLabel: {
                type: String,
                default () {
                    return 'button';
                }
            },
            buttonType: {
                type: String,
                default () {
                    return 'button';
                }
            },
            buttonTitle: {
                type: String,
                default () {
                    return '';
                }
            },
        }
    }
</script>

<style lang="scss" module>
.button {
    font-size: 1em;
    padding: $form-input-button-padding;
    border-radius: $form-input-border-radius;
    text-transform: capitalize;
}
</style>