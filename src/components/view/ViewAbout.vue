<template>
  <div class="about">
    <BaseHeadingSidebar :heading-text="$t('about.title')" />
    <div class="content">
      <div class="desc">
        <h2 :class="$style['heading-2']">
          <span :class="$style['color-focus']">{{ $t('about.headings.heading-1') }}</span>, {{ $t('about.headings.heading-2') }}
        </h2>
        <p :class="$style['text']">
          {{ $t('about.paragraph') }}
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
  margin-bottom: 4em;
}
</style>