<template>
  <div class="contact">
    <BaseHeadingSidebar :heading-text="'contact'" />
    <div class="content">
      <h3 :class="$style['heading-3']">
        Get in touch
      </h3>
      <AppContactForm />
    </div>
  </div>
</template>

<script>
    import AppContactForm from '../AppContactForm';
    import BaseHeadingSidebar from '../base/BaseHeadingSidebar';

    export default {
        components: {
            BaseHeadingSidebar,
            AppContactForm
        }
    };

</script>

<style lang="scss" module>
.heading-3 {}
</style>