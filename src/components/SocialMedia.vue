<template>
  <div class="social-media">
    <a href="#" class="linkedin">linkedin</a>
    <a href="#" class="github">github</a>
    <a href="#" class="instagram">instagram</a>
  </div>
</template>
<style scoped lang="scss">
a {
  display: inline-block;
  width: 30px;
  height: 30px;
  color: transparent;
  margin: 0 15px;
  &.linkedin {
    background: transparent url("../assets/LinkedIn-Logos/LI-In-Bug.png");
    background-size: cover;
  }
  &.github {
    background: transparent url("../assets/GitHub-Logos/GitHub_Logo.png");
    background-size: cover;
  }
  &.instagram {
    background: transparent
      url("../assets/GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png");
    background-size: cover;
  }
}
</style>
