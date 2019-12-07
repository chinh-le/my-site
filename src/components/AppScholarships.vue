<template>
  <div
    id="scholarships"
    class="scholarships"
  >
    <h3>Scholarships</h3>
    <ul v-if="scholarships.length > 0">
      <li
        v-for="(scholarship, index) in scholarships"
        :key="index"
      >
        <h4>{{ scholarship.header }}</h4>
        <p>
          <a
            :href="scholarship.url"
            :title="scholarship.alt"
          >@{{ scholarship.location }}</a>
        </p>
        <img
          :src="scholarship.image"
          :alt="scholarship.alt"
        >
      </li>
    </ul>
    <p v-if="!scholarships">
      Oops! There's something wrong with our server.
      <br>Please try again later.
    </p>
  </div>
</template>

<script>
    import { _getCollection, _getImgContextPath } from '@/firebase';
    export default {
        data () {
            return {
                scholarships: []
            };
        },
        created () {
            _getCollection('scholarships').then(snapshots => {
                // console.log('TLC: created -> snapshots', snapshots);
                if (!snapshots.empty) {
                    snapshots.forEach(element => {
                        // console.log('TLC: created -> element', element);
                        let elemData = element.data();
                        // console.log('TLC: created -> elemData', elemData);
                        if (elemData.image) {
                            // elemData.image = this.getImgContextPath(elemData.image);
                            elemData.image = _getImgContextPath(`education/${elemData.image}`);
                        }

                        this.scholarships.push(elemData);
                    });
                } else {
                    // console.error('list empty!!!');
                    this.scholarships = false;
                }
            });
        }
    };

</script>

<style lang="scss" scoped>
li {
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
}
</style>