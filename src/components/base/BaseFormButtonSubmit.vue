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
    color: var(--form-button-submit-txt-color);
    background-color: var(--form-button-submit-bg-color);
    margin-top: 2em;
    &:disabled {
      color: var(--form-button-submit-disabled-txt-color);
      background-color: var(--form-button-submit-disabled-bg-color);
    }
    &:hover {
        cursor: pointer;
    }
}
</style>