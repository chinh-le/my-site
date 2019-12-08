<template>
  <div
    id="certificates"
    class="certificates"
  >
    <h3>Certifications</h3>
    <!-- <ul v-if="certificates.length > 0">
      <li
        v-for="certificate in certificates"
        :key="certificate.header"
      >
        <h4>{{ certificate.header }}</h4>
        <p>
          <a
            :href="certificate.url"
            :title="certificate.url"
          >@{{ certificate.location }}</a>
        </p>
        <img
          :src="certificate.image"
          :alt="certificate.alt"
        >
      </li>
    </ul> -->
    <AppCardList
      v-if="certificates.length > 0"
      :items="certificates"
    />
    <p v-if="!certificates">
      Oops! There's something wrong with our server.
      <br>Please try again later.
    </p>
  </div>
</template>

<script>
    import { _getCollection, _getImgContextPath } from '@/firebase';
    import AppCardList from './AppCardList';

    export default {
        components: {
            AppCardList
        },
        data () {
            return {
                certificates: []
            };
        },
        created () {
            _getCollection('certificates').then(snapshots => {
                // console.log('TLC: created -> snapshots', snapshots);
                if (!snapshots.empty) {
                    snapshots.forEach(element => {
                        // console.log('TLC: created -> element.data()', element.data());
                        let elemData = element.data();
                        if (elemData.image) {
                            elemData.image = _getImgContextPath(`education/${elemData.image}`);
                        }
                        // console.log('TLC: created -> elemData.image', elemData.image);
                        this.certificates.push(elemData);
                    });
                } else {
                    // console.log('TLC: created -> lsit empty');
                    this.certificates = false;
                }
            });
        }
    };

</script>

<style lang="scss" scoped>
.certificates {
    margin-bottom: 3em;
}

/* li {
    border-radius: 0.5em;
    background-color: #fff;
    padding: 1em;
    margin-bottom: 1em;
    h3 {
        font-size: 1em;
        margin-bottom: 0.5em;
    }
    p {
        font-size: 0.7em;
        margin-bottom: 1em;
    }
    a {
        display: block;
        color: $color-unfocus;
    }
    img {
        width: 100%;
    }
} */
</style>