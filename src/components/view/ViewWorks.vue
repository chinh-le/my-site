<template>
  <div
    id="works"
    :class="$style['works']"
  >
    <BaseHeadingSidebar :heading-text="$t('works.title')" />
    <div
      id="worksContent"
      :class="$style['content']"
    >
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
.works {
  position: absolute;
  top: 0;
  left: 0; // to have justified center with margin auto
  right: 0; // to have justified center with margin auto
  bottom: 0;
  padding: var(--site-wrap-padding);
  width: var(--works-width);
  box-sizing: border-box;
  margin: 0 auto;
  height: var(--works-height);
}
.content{
  padding-bottom: 2em;
}
</style>