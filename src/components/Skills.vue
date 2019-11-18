<template>
  <div class="skills">
    <h2>Skills</h2>
    <ul class>
      <li>
        <h5>VueJS</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">average</label>
        </div>
      </li>
      <li>
        <h5>React 16</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">average</label>
        </div>
      </li>
      <li>
        <h5>Angular, AngularJS</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">average</label>
        </div>
      </li>
      <li>
        <h5>Boostrap 4</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">average</label>
        </div>
      </li>
      <li>
        <h5>Google Firebase, Google Cloud Platform</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">average</label>
        </div>
      </li>
      <li>
        <h5>Javascript, JQuery</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">good</label>
        </div>
      </li>
      <li>
        <h5>CSS, Sass, Less</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">good</label>
        </div>
      </li>
      <li>
        <h5>HTML</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">good</label>
        </div>
      </li>
      <li>
        <h5>Git, Subversion</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">average</label>
        </div>
      </li>
      <li>
        <h5>NPM, Yarn, Webpack</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">average</label>
        </div>
      </li>
      <li>
        <h5>Grunt, Grunt</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">average</label>
        </div>
      </li>
      <li>
        <h5>Java, PHP, Smarty</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">basic</label>
        </div>
      </li>
      <!-- <li v-for="skill in skills.set" :key="skill.name">
        <h5>{{skill.name}}</h5>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span
              v-for="rating in skills.ratings"
              :key="rating.id"
              class="dot"
              :class="setDot(skill.rateId)"
            ></span>
          </div>
          <label for="dots">{{skills.ratings.id[skill.rate].label}}</label>
        </div>
      </li>-->
    </ul>
  </div>
</template>
<script>
/* const DotBox = {
  template: `<span class="dot-box>dot box</span>`
}; */
export default {};
</script>
<style lang="scss" scoped>
@import "../style/components/skills.scss";
</style>
