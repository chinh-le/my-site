<template>
  <BaseFormButton
    :btn-label="label"
    :btn-type="'submit'"
    :btn-title="title"
    :class="$style['btn-submit']"
  />
</template>

<script>
    import BaseFormButton from './BaseFormButton';

    export default {
        components: {
            BaseFormButton
        },
        props: {
            label: {
                type: String,
                default () {
                    return 'submit';
                }
            },
            title: {
                type: String,
                default () {
                    return '';
                }
            }
        }        
    }
</script>

<style lang="scss" module>
.btn-submit {
    color: $color-txt-form-button;
    background-color: $color-bg-form-button;
    margin-top: 2em;
    &:disabled {
      color: $color-txt-form-button-disabled;
      background-color: $color-bg-form-button-disabled;
    }
    &:hover {
        cursor: pointer;
    }
}
</style>