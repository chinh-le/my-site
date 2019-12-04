<template>
  <div class="scholarships" id="scholarships">
    <h3>Scholarships</h3>
    <ul v-if="scholarships.length > 0">
      <li v-for="(scholarship, index) in scholarships" :key="index">
        <h4>{{scholarship.header}}</h4>
        <p>
          <a :href="scholarship.url" :title="scholarship.alt">@{{scholarship.location}}</a>
        </p>
        <img :src="scholarship.image" :alt="scholarship.alt" />
      </li>
    </ul>
    <p v-if="!scholarships">
      Oops! There's something wrong with our server.
      <br />Please try again later.
    </p>
  </div>
</template>

<script src="./scholarships.js"/>
<style scoped lang="scss>" src="./scholarships.scss"/>
