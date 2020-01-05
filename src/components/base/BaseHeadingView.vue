<template>
  <header
    id="headerView"
    :class="$style['heading-view']"
  >
    <h1 class="heading1-view">
      {{ headingText }}
    </h1>
  </header>
</template>

<script>
    export default {
        props: {
            headingText: {
                type: String,
                default: () => ''
            }
        },
    };
</script>

<style lang="scss" module>
.heading-view {
    display: var(--heading1-view-display);
}
</style>