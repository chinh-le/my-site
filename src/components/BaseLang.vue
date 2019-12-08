<template>
  <div class="lang">
    <ul>
      <li>
        <a
          href="#"
          class="fr"
          title="français"
        >fr</a>
      </li>
      <li>
        <a
          href="#"
          class="current en"
          title="ehglish"
        >en</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.lang {
  > ul > li {
    display: inline-block;
    > a {
      text-decoration: none;
      display: block;
      color: $color-txt;
      text-transform: uppercase;
      font-size: 0.8em;
      padding: 1.2em;
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
.lang {
.site-nav {
    margin-bottom: 2em;
  }
}
</style>