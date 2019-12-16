<template>
  <div
    id="home"
    :class="$style['home']"
  >
    <div :class="$style['content']">
      <BaseHeadingView :heading-text="$t('home.title')" />
      <h2 :class="$style['heading-2']">
        <span :class="$style['color-focus']">{{ $t('home.heading-1') }}</span> {{ $t('home.heading-2') }}
      </h2>
      <p :class="[$style['line'], $style['color-focus']]">
        ___
      </p>
    </div>
  </div>
</template>

<script>
    import BaseHeadingView from '../base/BaseHeadingView';
    export default { 
        components: {
            BaseHeadingView
        }
    }
</script>

<style lang="scss" module>
.home {}
.content {
  width: var(--home-content-width);
  margin: 0 auto;
  box-sizing: border-box;
}
.heading-2 {
  font-size: 2.5em;
  margin-bottom: var(--heading2-margin-bottom);
}
.line {
    font-size: 3em;
    // display: none;
}
.color-focus {
    color: $highlight-color;
}
</style>