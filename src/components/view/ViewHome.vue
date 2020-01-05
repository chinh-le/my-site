<template>
  <div
    id="home"
    :class="$style['home']"
  >
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
        :class="$style['home-content']"
      >
        <BaseHeadingView :heading-text="$t('home.title')" />
        <h2 :class="$style['heading-2']">
          <span :class="$style['color-focus']">{{ $t('home.heading-1') }}</span> {{ $t('home.heading-2') }}
        </h2>
        <p :class="[$style['line'], $style['color-focus']]">
          ___
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
    import BaseHeadingView from '../base/BaseHeadingView';
    export default {
        components: {
            BaseHeadingView
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
.home {
  height: 100%;
}
.home-content {
  width: var(--home-content-width);
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}
.heading-2 {
  font-size: 2.5em;
  margin-bottom: var(--heading2-margin-bottom);
}
.line {
    font-size: 3em;
}
.color-focus {
    color: $highlight-color;
}
@include slide-fade-helper('enter');
</style>