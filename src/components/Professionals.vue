<template>
  <div v-if="professionals" class="professionals">
    <h3 id="professional">Professional</h3>
    <ul class>
      <li v-for="(professional, key, index) in professionals" :key="index">
        <a :href="professional.url" :class="key" :title="professional.label">
          <img :src="getImgContextPath(professional.image)" :alt="professional.label" />
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
      professionals: []
    };
  },
  methods: {
    getImgContextPath (imgName) {
      const imgPath = require('@/assets/works/' + imgName);

      return imgPath || null;
    }
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
  }
};
</script>
<style src="@/styles/components/professionals.scss" scoped lang="scss"></style>
