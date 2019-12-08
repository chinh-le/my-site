<template>
  <div
    v-if="personals"
    class="personals"
  >
    <h3 id="personal">
      Personal
    </h3>
    <!-- <ul v-if="personals.length > 0">
      <li
        v-for="(personal, index) in personals"
        :key="index"
      >
        <a
          :href="personal.url"
          :class="personal.label"
          :title="personal.label"
        >
          <img
            v-if="personal.image"
            :src="personal.image"
            :alt="personal.label"
          >
          <span
            v-else
            class="overlay"
          />
        </a>
      </li>
    </ul> -->
    <AppCardOverlayList
      v-if="personals.length > 0"
      :items="personals"
    />
    <p v-if="!personals">
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
                personals: []
            };
        },
        created () {
            _getCollection('personals').then(querySnapshot => {
                // console.log('TLC: created -> querySnapshot', querySnapshot);
                if (!querySnapshot.empty) {
                    querySnapshot.forEach(element => {
                        let elemData = element.data();
                        if (elemData.image) {
                            elemData.image = _getImgContextPath(`works/${elemData.image}`);
                        }
                        this.personals.push(elemData);
                    });
                } else {
                    // console.log('TLC: created -> list empty');
                    this.personals = false;
                }
            });
        }
    };

</script>

<style lang="scss" scoped>
li {
  width: 100%;
  margin-bottom: 1em;
}

/* a {
    display: block;
    color: $color-txt;
    text-decoration: none;
    > img {
        width: 100%;
    }
}

.overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    &:before {
        content: 'coming soon';
    }
} */
</style>