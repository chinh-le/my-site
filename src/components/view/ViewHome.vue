<template>
  <div
    id="home"
    :class="$style['home']"
  >
    <div :class="$style['content']">
      <h1 :class="$style['heading-1']">
        {{ $t('home.title') }}
      </h1>
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
    export default { 
        /* mounted () {
            console.log(window.innerHeight);
            const elHome = document.querySelector('#home');
            const theHeader = document.querySelector('#theHeader');
            const theFooter = document.querySelector('#theFooter');
            console.log(theHeader.clientHeight);
            console.log(theFooter.clientHeight);
            elHome.setAttribute('style', `height: ${window.innerHeight - theHeader.clientHeight - theFooter.clientHeight}px`);
        } */
    }
</script>

<style lang="scss" module>
.home {
  // display: flex;
  // align-items: center;
  // box-sizing: border-box;

}
.content {
  width: var(--home-content-width);
  margin: 0 auto;
}
.heading-1 {
  // margin-top: 3em;
  // margin-bottom: 4em;
}
.heading-2 {
  font-size: 2.5em;
  // margin-bottom: 1em;
}
.line {
    font-size: 3em;
    // display: none;
}
.color-focus {
    color: $highlight-color;
}
</style>