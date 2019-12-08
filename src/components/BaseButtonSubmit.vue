<template>
  <BaseFormButton
    :button-label="label"
    :button-type="'submit'"
    :button-title="title"
    :class="$style.BaseButtonSubmit"
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
.BaseButtonSubmit {
    color: $color-txt-form-button;
    background-color: $color-bg-form-button;
    &:disabled {
      color: $color-txt-form-button-disabled;
      background-color: $color-bg-form-button-disabled;
    }
    &:hover {
        cursor: pointer;
    }
}
</style>