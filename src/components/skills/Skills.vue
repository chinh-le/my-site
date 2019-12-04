<template>
  <div class="skills">
    <h3>Skills</h3>
    <ul v-if="skills.length > 0">
      <li v-for="skill in skills" :key="skill.name">
        <h4>{{skill.name}}</h4>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span
              class="dot"
              v-for="dot in ratingsLength"
              :key="dot"
              :class="{fill: dot <= skill.rate, empty: dot > skill.rate}"
            ></span>
          </div>
          <label for="dots">{{ratings[skill.rate]}}</label>
        </div>
      </li>
    </ul>
    <p v-if="!ratings || !skills">
      Oops! There's something wrong with our server.
      <br />Please try again later.
    </p>
  </div>
</template>

<script src="./skills.js"/>
<style lang="scss" scoped src="./skills.scss"/>
