<template>
  <div v-if="professionals" class="professionals">
    <h3 id="professional">Professional</h3>
    <ul v-if="professionals.length > 0">
      <li v-for="(professional, index) in professionals" :key="index">
        <a :href="professional.url" :class="professional.label" :title="professional.label">
          <img :src="professional.image" :alt="professional.label" />
          <span class="overlay">{{professional.label}}</span>
        </a>
      </li>
    </ul>
    <p v-if="!professionals">
      Oops! There's something wrong with our server.
      <br />Please try again later.
    </p>
  </div>
</template>

<script src="./professionals.js"/>
<style scoped lang="scss" src="./professionals.scss"/>
