<template>
  <div class="education">
    <h1>Education</h1>
    <h2>Scholarships</h2>
    <ul class="scholarships">
      <li>
        <h3>Cloud Developer</h3>
        <p>
          @
          <a href="https://www.udacity.com/course/cloud-developer-nanodegree--nd9990">Udacity.com</a>
        </p>
        <img src="../assets/education/Bertelsmann-2019@2x.jpg" alt="Bertelsmann scholarship" />
      </li>
    </ul>
    <h2>Certifications</h2>
    <ul class="certificates">
      <li>
        <h3>VueJS 2 - The Complete Guide</h3>
        <p>
          @
          <a href="udemy.com/course/vuejs-2-the-complete-guide/">Udemy.com</a>
        </p>
        <img src="../assets/education/UC-KKDCJ1EE.jpg" alt="VueJS 2 certificate" />
      </li>
      <li>
        <h3>React 16 - The Complete Guide</h3>
        <p>
          @
          <a href="udemy.com/course/react-the-complete-guide-incl-redux/">Udemy.com</a>
        </p>
        <img src="../assets/education/UC-AV9URVXK.jpg" alt="React 16 certificate" />
      </li>
      <li>
        <h3>Angular - The Complete Guide</h3>
        <p>
          @
          <a href="udemy.com/course/the-complete-guide-to-angular-2/">Udemy.com</a>
        </p>
        <img src="../assets/education/UC-RFUPPOFP.jpg" alt="Angular certificate" />
      </li>
      <li>
        <h3>VueJS 2 - The Complete Guide</h3>
        <p>
          @
          <a href="udemy.com/course/bootstrap-4-bootcamp/">Udemy.com</a>
        </p>
        <img src="../assets/education/UC-SCGX1MCT.jpg" alt="Bootstrap 4 certificate" />
      </li>
      <li>
        <h3>Software Development</h3>
        <p>@McGill University</p>
      </li>
      <li>
        <h3>Web Design</h3>
        <p>@Concordia University</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$app-txt-color: #999;

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}

h1 {
  @extend .visually-hidden;
}
h2 {
  font-size: 1.2em;
  margin-bottom: 1em;
}
.scholarships {
  margin-bottom: 3em;
}
.scholarships,
.certificates {
  > li {
    border: 1px solid #fff;
    padding: 1em;
    margin-bottom: 1em;
    h3 {
      font-size: 1em;
      margin-bottom: 0.5em;
    }
    p {
      font-size: 0.7em;
      margin-bottom: 1em;
    }
    a {
      text-decoration: none;
      color: $app-txt-color;
    }
    img {
      width: 100%;
    }
  }
}
</style>
