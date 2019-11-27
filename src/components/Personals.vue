<template>
  <div v-if="personals" class="personals">
    <h3 id="personal">Personal</h3>
    <ul class>
      <li v-for="(personal, key, index) in personals" :key="index">
        <a :href="personal.url" :class="key" :title="personal.label">
          <img v-if="personal.image" :src="getImgContextPath(personal.image)" :alt="personal.label" />
          <span v-else class="overlay"></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { _getCollection } from '@/firebase';
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
          this.personals.push(element.data());
        });
      } else {
        console.error('list empty!!!');
      }
    });
  },
  methods: {
    getImgContextPath (imgName) {
      const imgPath = require('@/assets/works/' + imgName);

      return imgPath || null;
    }
  }
};
</script>
<style src="@/styles/components/personals.scss" scoped lang="scss"></style>
