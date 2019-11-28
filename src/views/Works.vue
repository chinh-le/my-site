<template>
  <div class="works">
    <div class="heading">
      <h1 id="works">works</h1>
    </div>
    <div class="content">
      <app-professionals />
      <app-personals />
    </div>
    <app-page-links />
    <!-- <div class="page-links"> -->
    <!-- <div class="links">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>-->
  </div>
</template>
<script>
import Professionals from '@/components/Professionals';
import Personals from '@/components/Personals';
import PageLinks from '@/components/PageLinks';

export default {
  components: {
    appProfessionals: Professionals,
    appPageLinks: PageLinks,
    appPersonals: Personals
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/works.scss";
</style>
