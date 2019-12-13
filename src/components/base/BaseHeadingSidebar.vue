<template>
  <header
    id="headerSidebar"
    :class="$style['heading']"
    :style="posX"
  >
    <!-- <h1 :class="$style['heading-1']"> -->
    <div class="heading-container">
      <h1 class="heading-1">
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
.heading {
//   position: relative;
}
</style>