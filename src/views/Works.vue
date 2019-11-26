<template>
  <div class="works">
    <div class="heading">
      <h1 id="works">works</h1>
    </div>
    <div class="content">
      <div v-if="professionals" class="container">
        <h3 id="professional">Professional</h3>
        <ul class="professionals">
          <li v-for="(professional, key, index) in professionals" :key="index">
            <a :href="professional.url" :class="key" :title="professional.label">
              <img :src="getImgContextPath(professional.image)" :alt="professional.label" />
            </a>
          </li>
        </ul>
      </div>
      <div v-if="personals" class="container">
        <h3 id="personal">Personal</h3>
        <ul class="personals">
          <li v-for="(personal, key, index) in personals" :key="index">
            <a :href="personal.url" :class="key" :title="personal.label">
              <img
                v-if="personal.image"
                :src="getImgContextPath(personal.image)"
                :alt="personal.label"
              />
              <span v-else class="overlay"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <app-page-links />
  </div>
</template>
<script>
import { _getCollection } from '@/firebase';
import PageLinks from '@/components/PageLinks';

export default {
  components: {
    appPageLinks: PageLinks
  },
  data () {
    return {
      professionals: [],
      personals: []
    };
  },
  created () {
    // professionals
    _getCollection('professionals').then(querySnapshot => {
      // console.log('TLC: created -> querySnapshot', querySnapshot);
      if (!querySnapshot.empty) {
        querySnapshot.forEach(element => {
          this.professionals.push(element.data());
        });
      } else {
        console.error('list empty!!!');
      }
    });

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
<style lang="scss" scoped>
@import "../styles/views/works.scss";
</style>
