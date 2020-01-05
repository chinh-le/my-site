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
        :class="['contact-content']"
      >
        <h3 :class="$style['heading-3']">
          {{ $t('contact.heading') }}
        </h3>
        <AppContactForm />
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
            };
        },
        mounted () {
            this.isAnimated = true;
        }
    };

</script>

<style lang="scss" module>
.contact {
  --heading1-first-letter: normal;
  
  padding: var(--site-wrap-padding);
  width: var(--contact-width);
  margin: 0 auto;
  box-sizing: border-box;
  height: var(--contact-height);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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