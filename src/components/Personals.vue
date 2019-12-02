<template>
  <div v-if="personals" class="personals">
    <h3 id="personal">Personal</h3>
    <ul v-if="personals.length > 0">
      <li v-for="(personal, index) in personals" :key="index">
        <a :href="personal.url" :class="personal.label" :title="personal.label">
          <img v-if="personal.image" :src="personal.image" :alt="personal.label" />
          <span v-else class="overlay"></span>
        </a>
      </li>
    </ul>
    <p v-else>
      Oops! There's something wrong with our server.
      <br />Please try again later.
    </p>
  </div>
</template>
<script>
import { _getCollection, _getImgContextPath } from '@/firebase';
export default {
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
      }
    });
  }
};
</script>
<style src="@/styles/components/personals.scss" scoped lang="scss"></style>
