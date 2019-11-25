<template>
  <div class="education">
    <div class="heading">
      <h1>Education</h1>
    </div>
    <div class="content">
      <h3>Certifications</h3>
      <ul class="certificates">
        <li>
          <h4>VueJS 2 - The Complete Guide</h4>
          <p>
            @
            <a href="udemy.com/course/vuejs-2-the-complete-guide/">Udemy.com</a>
          </p>
          <img src="../assets/education/UC-KKDCJ1EE.jpg" alt="VueJS 2 certificate" />
        </li>
        <li>
          <h4>React 16 - The Complete Guide</h4>
          <p>
            @
            <a href="udemy.com/course/react-the-complete-guide-incl-redux/">Udemy.com</a>
          </p>
          <img src="../assets/education/UC-AV9URVXK.jpg" alt="React 16 certificate" />
        </li>
        <li>
          <h4>Angular - The Complete Guide</h4>
          <p>
            @
            <a href="udemy.com/course/the-complete-guide-to-angular-2/">Udemy.com</a>
          </p>
          <img src="../assets/education/UC-RFUPPOFP.jpg" alt="Angular certificate" />
        </li>
        <li>
          <h4>Bootstrap 4 - Bootcamp</h4>
          <p>
            @
            <a href="udemy.com/course/bootstrap-4-bootcamp/">Udemy.com</a>
          </p>
          <img src="../assets/education/UC-SCGX1MCT.jpg" alt="Bootstrap 4 certificate" />
        </li>
        <li>
          <h4>Software Development</h4>
          <p>@ McGill University</p>
        </li>
        <li>
          <h4>Web Design</h4>
          <p>@ Concordia University</p>
        </li>
      </ul>
      <h3>Scholarships</h3>
      <ul class="scholarships">
        <li>
          <h4>Cloud Developer</h4>
          <p>
            @
            <a href="https://www.udacity.com/course/cloud-developer-nanodegree--nd9990">Udacity.com</a>
          </p>
          <img src="../assets/education/Bertelsmann-2019@2x.jpg" alt="Bertelsmann scholarship" />
        </li>
      </ul>
    </div>
    <app-page-links />
  </div>
</template>
<script>
import PageLinks from '@/components/PageLinks';

export default {
  components: {
    appPageLinks: PageLinks
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/views/education.scss";
</style>
