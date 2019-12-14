<template>
  <header
    id="headerViewSidebar"
    :class="$style['heading-view-sidebar']"
    :style="posX"
  >
    <div :class="$style['heading-view-sidebar-container']">
      <h1 :class="$style['heading1-view-sidebar']">
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
.heading-view-sidebar {
    display: var(--heading1-view-sidebar-display);
    width: 4%;
    height: 100%;
    position: fixed !important;
    top: 0;
    left: 0;
}
.heading-view-sidebar-container {
    position: relative;
    height: 100%;
}
.heading1-view-sidebar {
    position: absolute;
    top: 50%;
    transform: translateY(50%) rotate(-90deg);
    width: 100%;
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>