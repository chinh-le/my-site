<template>
  <div class="about">
    <BaseHeadingSidebar :heading-text="$t('about.title')" />
    <div class="content">
      <div class="desc">
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
        <p :class="[$style['text'], $style['last']]">
          {{ $t('about.paragraph-4') }}.
        </p>
      </div>
      <AppSkills />
    </div>
  </div>
</template>

<script>
    import AppSkills from '../AppSkills';
    import BaseHeadingSidebar from '../base/BaseHeadingSidebar';

    export default {
        components: {
            BaseHeadingSidebar,
            AppSkills
        }
    };
</script>

<style lang="scss" module>
.color-focus {
    @include color-focus;
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