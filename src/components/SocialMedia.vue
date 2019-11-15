<template>
  <ul class="social-media">
    <li>
      <a href="https://www.linkedin.com/in/chinh11/" class="linkedin">linkedin</a>
    </li>
    <li>
      <a href="https://github.com/chinh-le" class="github">github</a>
    </li>
    <a href="https://www.instagram.com/niusaul/" class="instagram">instagram</a>
  </ul>
</template>
<style scoped lang="scss">
ul {
  li {
    display: inline-block;
  }
  a {
    display: inline-block;
    width: 20px;
    height: 20px;
    color: transparent;
    margin-right: 1em;
    padding: 0.5em;
    &.linkedin {
      background: transparent url("../assets/linkedin-logo-lightgray.png")
        no-repeat left 0.5em;
      background-size: 20px 20px;
    }
    &.github {
      background: transparent url("../assets/github-logo-lightgray.png")
        no-repeat left 0.5em;
      background-size: 20px 20px;
    }
    &.instagram {
      background: transparent url("../assets/instagram-logo-lightgray.png")
        no-repeat left 0.5em;
      background-size: 20px 20px;
    }
  }
}
</style>
