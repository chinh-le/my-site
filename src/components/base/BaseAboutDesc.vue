<template>
  <div :class="$style['desc']">
    <h2 :class="$style['heading-2']">
      <span :class="$style['color-focus']">{{ $t('about.heading-1') }}</span>, {{ $t('about.heading-2') }}
    </h2>
    <p :class="$style['text']">
      {{ $t('about.paragraph-1') }}.
    </p>
    <p :class="$style['text']">
      {{ $t('about.paragraph-2') }}.
    </p>
    <p :class="$style['text']">
      {{ $t('about.paragraph-3') }}.
    </p>
  </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" module>
.desc {
    width: var(--about-desc-width);
}
.color-focus {
    color: $highlight-color;
}
.heading-2 {
    margin-bottom: 1em;
}
.text {
  margin-bottom: 0.7em;
  &::first-letter {
    text-transform: capitalize;
  }
}
.last {
  margin-bottom: 3em;
}
</style>