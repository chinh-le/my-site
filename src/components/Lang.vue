<template>
  <div class="lang">
    <ul>
      <li>
        <a href="#" class="current en" title="ehglish">en</a>
      </li>
      <li>
        <a href="#" class="fr" title="français">fr</a>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.lang {
  // margin: 0 0 3em 1.5em;
  margin-bottom: 2em;
  > ul > li {
    display: inline-block;
    // margin-right: 1.5em;
    > a {
      text-decoration: none;
      display: block;
      color: $color-txt;
      text-transform: uppercase;
      font-size: 0.8em;
      padding: 1em 2em;
      &.router-link-exact-active,
      &.current {
        color: $color-nav-links-current;
      }
      &.en {
        &:before {
          content: "english";
          @include screen-reader-ready;
        }
      }
      &.fr {
        &:before {
          content: "français";
          @include screen-reader-ready;
        }
      }
    }
  }
}
</style>
