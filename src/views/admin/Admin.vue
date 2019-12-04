<template>
  <div class="admin">
    <h1>You are not meant to be here!!!</h1>
    <button @click="addCollection('professionals')">Add professionals</button> |
    <button @click="getCollection('professionals')">Get professionals</button>
    <br />
    <button @click="addCollection('personals')">Add personals</button> |
    <button @click="getCollection('personals')">Get personals</button>
    <br />
    <button @click="addCollection('certificates')">Add certificates</button> |
    <button @click="getCollection('certificates')">Get certificates</button>
    <br />
    <button @click="addCollection('scholarships')">Add scholarships</button> |
    <button @click="getCollection('scholarships')">Get scholarships</button>
    <br />
    <button @click="addSkills">Add Skills</button> |
    <button @click="getSkills">Get Skills</button>
    <br />
    <button @click="addRatings">Add Ratings</button> |
    <button @click="getRatings">Get Ratings</button>
    <br />
    <button @click="addCollection('socialMedia')">Add Social Media</button> |
    <button @click="getCollection('socialMedia')">Get Social Media</button>
  </div>
</template>

<script src="./admin.js"/>
<style scoped lang="scss" src="./admin.scss" />
