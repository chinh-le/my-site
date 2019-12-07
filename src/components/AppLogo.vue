<template>
  <div class="logo">
    <router-link
      to="/"
      title="home"
      class="font-effect-outline"
    >
      cle.
    </router-link>
  </div>
</template>

<script>
    export default {
    
    }
</script>

<style lang="scss" scoped>
.logo {
    font-family: $font-family-logo;
    font-size: 1.3em;
    a {
        text-decoration: none;
        color: $color-logo;
        padding: 0.65em; 
    }
}
</style>