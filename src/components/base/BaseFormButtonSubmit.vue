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
    color: $form-button-txt-color;
    background-color: $form-button-bg-color;
    margin-top: 2em;
    &:disabled {
      color: $form-button-txt-color-disabled;
      background-color: $form-button-bg-color-disabled;
    }
    &:hover {
        cursor: pointer;
    }
}
</style>