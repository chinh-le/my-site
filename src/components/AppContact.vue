<template>
  <div class="contact">
    <div
      class="heading"
      :style="posX"
    >
      <h1>contact</h1>
    </div>
    <div class="content">
      <h3>Get in touch</h3>
      <AppContactInfo />
    </div>
  </div>
</template>

<script>
    import { setPosX, windowResizeHandler } from '@/js/helpers';
    import AppContactInfo from './AppContactInfo';

    export default {
        components: {
            AppContactInfo
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
        mounted () {
            document.querySelector('#site-wrap').scroll({
                left: 0,
                top: 0
            });
        },
        beforeDestroy () {
            // console.log('TLC: Contact -> beforeDestroy');
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
.heading {
    position: relative;
}
</style>