<template>
  <div class="copyright">
    <span>&copy; chinhle.ca 2019.</span>
    <span>All rights reserved.</span>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.copyright {
  font-size: 0.7em;
  color: $color-unfocus;
  line-height: 1.2em;
  display: flex;
  flex-direction: column;
  > span {
    padding-right: 0.5em;
  }
}

.site-nav {
  .copyright {
    justify-content: center;
    flex-direction: row;
  }
}
</style>