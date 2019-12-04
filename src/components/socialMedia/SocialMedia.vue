<template>
  <ul class="social-media">
    <li v-for="(socialMedia, index) in socialMedias" :key="index">
      <a :href="socialMedia.url" :class="socialMedia.label" :title="socialMedia.label">
        <img :src="socialMedia.image" :alt="socialMedia.label" />
      </a>
    </li>
  </ul>
</template>

<script src="./socialMedia.js"/>
<style scoped lang="scss" src="./socialMedia.scss"/>
