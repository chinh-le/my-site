<template>
  <div class="home">
    <div class="content">
      <h1>Welcome to my personal site</h1>
      <h2>
        <span class="color-focus">Hello</span> My name is Chinh Le
      </h2>
      <p class="line color-focus">___</p>
    </div>
    <!-- <button @click="authenticate">Authenticate</button> -->
    <app-page-links />
  </div>
</template>

<script>
import PageLinks from '@/components/PageLinks';
export default {
  methods: {
    authenticate () {
      console.log(
        'TLC: authenticate -> this.$store.getters.isAuthenticated ',
        this.$store.getters.isAuthenticated
      );
    }
  },
  updated () {
    console.log(
      'TLC: Home created -> this.$store.getters.isAuthenticated ',
      this.$store.getters.isAuthenticated
    );
  },
  components: {
    appPageLinks: PageLinks
  }
};
</script>

<style scoped lang="scss">
@import "../styles/views/home.scss";
</style>
