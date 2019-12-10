<template>
  <div :class="$style['copyright']">
    <span>&copy; chinhle.ca 2019.</span>
    <span>All rights reserved.</span>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" module>
.copyright {
  font-size: 0.7em;
  color: $color-unfocus;
  line-height: 1.2em;
  display: flex;
  flex-direction: var(--copyright-flex-direction);
  justify-content: var(--copyright-justify-content);
  > span {
    padding-right: 0.5em;
  }
}
</style>