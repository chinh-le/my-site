<template>
  <div class="works">
    <BaseHeadingSidebar :heading-text="'works'" />
    <div class="content">
      <AppProfessionals />
      <AppPersonals />
    </div>
  </div>
</template>

<script>
    import BaseHeadingSidebar from '../base/BaseHeadingSidebar';
    import AppProfessionals from '../AppProfessionals';
    import AppPersonals from '../AppPersonals';

    export default {
        components: {
            BaseHeadingSidebar,
            AppProfessionals,
            AppPersonals
        }
    };

</script>

<style lang="scss" module>

</style>