<template>
  <header
    id="headerView"
    :class="$style['heading-view']"
    :style="posX"
  >
    <div class="heading-view-container">
      <h1 class="heading1-view">
        {{ headingText }}
      </h1>
    </div>
  </header>
</template>

<script>
    import { _setStyleInlineJustify } from '@/utils/helpers';

    export default {
        props: {
            headingText: {
                type: String,
                default: () => ''
            }
        },
        data () {
            return {
                posX: null
            };
        },
        created () {
            // set/keep the heading (h1) to the left aligning with the logo
            setInlineStyle(this);

            window.addEventListener('resize', () => setInlineStyle(this));
        },
        beforeDestroy () {
            window.removeEventListener('resize', setInlineStyle);
        }
    };

    const setInlineStyle = (vm) => {
        vm.posX = _setStyleInlineJustify('left');
    };
</script>

<style lang="scss" module>
.heading-view {
    display: var(--heading1-view-display);
}
</style>