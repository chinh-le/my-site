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
    import { setPosX, windowResizeHandler } from '@/utils/helpers';

    export default {
        props: {
            headingText: {
                type: String,
                default () {
                    return null;
                }
            }
        },
        data () {
            return {
                posX: null
            };
        },
        created () {
            // set/keep the heading (h1) to the left aligning with the logo
            this.posX = setPosX('left');

            window.addEventListener('resize', this.resizeHandler);
        },
        beforeDestroy () {
            // console.log('TLC: About -> beforeDestroy');
            window.removeEventListener('resize', this.resizeHandler);
        },
        methods: {
            resizeHandler (evt) {
                this.posX = windowResizeHandler(evt, 'left');
            }
        }
    }
</script>

<style lang="scss" module>
.heading-view {
    display: var(--heading1-view-display);
}
</style>