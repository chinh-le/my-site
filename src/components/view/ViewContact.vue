<template>
  <div
    id="contact"
    :class="$style['contact']"
  >
    <BaseHeadingView :heading-text="$t('contact.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('contact.title')" />
    <div
      id="contactContent"
      :class="['content']"
    >
      <h3 :class="$style['heading-3']">
        {{ $t('contact.heading') }}
      </h3>
      <AppContactForm />
      <p :class="[$style['text'], $style['last']]">
        {{ $t('app.download-instruction.text-1') }}.
      </p>
    </div>
  </div>
</template>

<script>
    import AppContactForm from '../AppContactForm';
    import BaseHeadingView from '../base/BaseHeadingView';
    import BaseHeadingViewSidebar from '../base/BaseHeadingViewSidebar';

    export default {
        components: {
            BaseHeadingView,
            BaseHeadingViewSidebar,
            AppContactForm
        }
    };

</script>

<style lang="scss" module>
.contact {
  --heading1-first-letter: normal;
  
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
.text {
  color: $dimlight-color;
  margin-bottom: 0.7em;
  &::first-letter {
    text-transform: capitalize;
  }
}
.last {
  margin-bottom: 3em;
}
</style>