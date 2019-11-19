<template>
  <div class="skills">
    <h3>Skills</h3>
    <ul class>
      <li>
        <h4>VueJS</h4>
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
        <h4>React 16</h4>
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
        <h4>Angular, AngularJS</h4>
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
        <h4>Boostrap 4</h4>
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
        <h4>Google Firebase, Google Cloud Platform</h4>
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
        <h4>Javascript, JQuery</h4>
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
        <h4>CSS, Sass, Less</h4>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">very good</label>
        </div>
      </li>
      <li>
        <h4>HTML</h4>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot fill"></span>
            <span class="dot empty"></span>
          </div>
          <label for="dots">very good</label>
        </div>
      </li>
      <li>
        <h4>Git, Subversion</h4>
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
        <h4>NPM, Yarn, Webpack</h4>
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
        <h4>Grunt, Grunt</h4>
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
        <h4>Java, PHP, Smarty</h4>
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
        <h4>{{skill.name}}</h4>
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
@import "@/styles/components/skills";
</style>
