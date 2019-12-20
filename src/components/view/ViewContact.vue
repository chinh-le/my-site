<template>
  <div
    id="contact"
    :class="$style['contact']"
  >
    <BaseHeadingView :heading-text="$t('contact.title')" />
    <BaseHeadingViewSidebar :heading-text="$t('contact.title')" />
    <transition
      name="slide-fade"
      mode="out-in"
      :enter-class="$style['slide-fade-enter']"
      :enter-to-class="$style['slide-fade-enter-to']"
      :enter-active-class="$style['slide-fade-enter-active']"
      :leave-class="$style['slide-fade-leave']"
      :leave-to-class="$style['slide-fade-leave-to']"
      :leave-active-class="$style['slide-fade-leave-active']"
    >
      <div
        v-if="isAnimated"
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
    </transition>
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
        },
        data () {
            return {
                isAnimated: false
            }
        },
        mounted () {
            this.isAnimated = true;
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
@include slide-fade-helper();
</style>