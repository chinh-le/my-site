<template>
  <div class="home">
    <div class="content">
      <h1>Welcome to my personal site</h1>
      <h2>
        <span class="color-focus">Hello</span> My name is Chinh Le
      </h2>
      <p class="line color-focus">
        ___
      </p>
    </div>
  </div>
</template>

<script>
    export default {
    
    }
</script>

<style lang="scss" scoped>
.heading {
  position: relative;
}

h1 {
  margin-top: 3em;
  margin-bottom: 4em;
}
h2 {
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