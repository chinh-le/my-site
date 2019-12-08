<template>
  <div class="works">
    <div
      class="heading"
      :style="posX"
    >
      <h1 id="works">
        works
      </h1>
    </div>
    <div class="content">
      <AppProfessionals />
      <AppPersonals />
    </div>
  </div>
</template>

<script>
    import { setPosX, windowResizeHandler } from '@/js/helpers';
    import AppProfessionals from './AppProfessionals';
    import AppPersonals from './AppPersonals';

    export default {
        components: {
            AppProfessionals,
            AppPersonals
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
            // console.log('TLC: Works -> beforeDestroy');
            window.removeEventListener('resize', this.resizeHandler);
        },
        methods: {
            resizeHandler (evt) {
                this.posX = windowResizeHandler(evt, 'left');
            }
        }
    };

</script>

<style lang="scss" scoped>
.links {
  position: fixed;
  top: 0;
  right: 0;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>