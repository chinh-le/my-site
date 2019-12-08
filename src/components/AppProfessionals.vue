<template>
  <div
    v-if="professionals"
    class="professionals"
  >
    <h3 id="professional">
      Professional
    </h3>
    <AppCardOverlayList
      v-if="professionals.length > 0"
      :items="professionals"
    />
    <p v-if="!professionals">
      Oops! There's something wrong with our server.
      <br>Please try again later.
    </p>
  </div>
</template>

<script>
    import { _getCollection, _getImgContextPath } from '@/firebase';
    import AppCardOverlayList from './AppCardOverlayList';

    export default {
        components: {
            AppCardOverlayList
        },
        data () {
            return {
                professionals: []
            };
        },
        created () {
            // professionals
            _getCollection('professionals').then(querySnapshot => {
                // // console.log('TLC: created -> querySnapshot', querySnapshot);
                if (!querySnapshot.empty) {
                    querySnapshot.forEach(element => {
                        // console.log('TLC: created -> element.data()', element.data());
                        let elemData = element.data();
                        if (elemData.image) {
                            elemData.image = _getImgContextPath(`works/${elemData.image}`);
                            // console.log('TLC: created -> elemData.image', elemData.image);
                        }
                        this.professionals.push(elemData);
                    });
                } else {
                    // console.error('list empty!!!');
                    this.professionals = false;
                }
            });
        }
    };

</script>

<style lang="scss" scoped>
.professionals {
  margin-bottom: 4em;
}



/* a {
    display: block;
    color: $color-txt;
    text-decoration: none;
    position: relative;
    > img {
        width: 100%;
    }
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      color: #fff;
    }
} */
</style>