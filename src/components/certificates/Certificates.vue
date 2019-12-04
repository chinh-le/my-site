<template>
  <div class="certificates" id="certificates">
    <h3>Certifications</h3>
    <ul v-if="certificates.length > 0">
      <li v-for="certificate in certificates" :key="certificate.header">
        <h4>{{certificate.header}}</h4>
        <p>
          <a :href="certificate.url" :title="certificate.url">@{{certificate.location}}</a>
        </p>
        <img :src="certificate.image" :alt="certificate.alt" />
      </li>
    </ul>
    <p v-if="!certificates">
      Oops! There's something wrong with our server.
      <br />Please try again later.
    </p>
  </div>
</template>

<script src="./certificates.js"/>
<style src="./certificates.scss" scoped lang="scss"/>
