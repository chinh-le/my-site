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
    <p v-if="!personals">
      Oops! There's something wrong with our server.
      <br />Please try again later.
    </p>
  </div>
</template>

<script src="./personals.js"/>
<style scoped lang="scss" src="./personals.scss"/>
