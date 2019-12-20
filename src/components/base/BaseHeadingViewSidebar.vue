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
    import { setStyleInlineJustify } from '@/utils/helpers';

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
    }

    const setInlineStyle = (vm) => {
        vm.posX = setStyleInlineJustify('left');
    };
</script>

<style lang="scss" module>
.heading-view-sidebar {
    display: var(--heading1-view-sidebar-display);
    width: 10%;
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
    left: var(--heading1-view-sidebar-left);
    transform: translateY(50%) rotate(-90deg);
    width: 100%;
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>