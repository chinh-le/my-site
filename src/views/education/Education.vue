<template>
  <div class="education">
    <div class="heading" :style="posX">
      <h1>Education</h1>
    </div>
    <div class="content">
      <app-certificates />
      <app-scholarships />
    </div>
  </div>
</template>

<script src="./education.js"/>
<style lang="scss" scoped src="./education.scss"/>
