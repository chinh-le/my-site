<template>
  <div
    id="contact"
    :class="$style['contact']"
  >
    <BaseHeadingSidebar :heading-text="$t('contact.title')" />
    <div
      id="contactContent"
      :class="['content']"
    >
      <h3 :class="$style['heading-3']">
        {{ $t('contact.heading') }}
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
.contact {
  position: absolute;
  top: 0;
  left: 0; // to have justified center with margin auto
  right: 0; // to have justified center with margin auto
  bottom: 0;
  padding: var(--site-wrap-padding);
  width: var(--contact-width);
  box-sizing: border-box;
  margin: 0 auto;
  height: var(--contact-height);
}
</style>