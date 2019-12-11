<template>
  <div class="home">
    <div class="content">
      <h1 :class="$style['heading-1']">
        {{ $t('home.title') }}
      </h1>
      <h2 :class="$style['heading-2']">
        <span :class="$style['color-focus']">{{ $t('home.headings.heading-1') }}</span> {{ $t('home.headings.heading-2') }}
      </h2>
      <p :class="[$style['line'], $style['color-focus']]">
        ___
      </p>
    </div>
  </div>
</template>

<script>
    export default {    }
</script>

<style lang="scss" module>
.heading-1 {
  margin-top: 3em;
  margin-bottom: 4em;
}
.heading-2 {
  font-size: 3em;
  margin-bottom: 1em;
}
.line {
    font-size: 3em;
    display: none;
}
.color-focus {
    @include color-focus;
}
</style>