<template>
  <div class="education">
    <div
      class="heading"
      :style="posX"
    >
      <h1>Education</h1>
    </div>
    <div class="content">
      <AppCertificates />
      <AppScholarships />
    </div>
  </div>
</template>

<script>
    import { setPosX, windowResizeHandler } from '@/js/helpers';
    import AppCertificates from './AppCertificates';
    import AppScholarships from './AppScholarships';

    export default {
        components: {
            AppCertificates,
            AppScholarships
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
            // console.log('TLC: Education -> beforeDestroy');
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
.education {
    display: flex;
    flex-direction: column;
}

.heading {
    position: relative;
}

.education {
    position: relative;
    .content {
        box-sizing: border-box;
        overflow-y: scroll;
    }
}
</style>