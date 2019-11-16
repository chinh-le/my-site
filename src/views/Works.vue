<template>
  <div class="works">
    <h1 id="experiences">Experiences</h1>
    <div class="container">
      <h2 id="professional">Professional</h2>
      <ul>
        <li>
          <a href="https://www.videotron.com/" class="videotron"></a>
        </li>
        <li>
          <a href="https://clubillico.videotron.com/" class="clubillico"></a>
        </li>
        <li>
          <a href="https://illicoweb.videotron.com/" class="illicoweb"></a>
        </li>
      </ul>
    </div>
    <div class="container">
      <h2 id="personal">Personal</h2>
      <ul>
        <li>
          <a href="#" class="coming-soon"></a>
        </li>
        <li>
          <a href="#" class="coming-soon"></a>
        </li>
        <li>
          <a href="#" class="coming-soon"></a>
        </li>
      </ul>
    </div>
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
  margin-bottom: 0.5em;
}
.container {
  margin-bottom: 3em;
}
li {
  width: 100%;
  margin-bottom: 1em;
}
a {
  display: block;
  width: 100%;
  height: 200px;
  text-decoration: none;
  color: $app-txt-color;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100% 90%;
  &:before {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
  &.videotron {
    background-image: url("../assets/videotron-mobility.png");
    &:before {
      content: "Videotron";
    }
  }
  &.clubillico {
    background-image: url("../assets/clubillico.png");
    &:before {
      content: "Club illico";
    }
  }
  &.illicoweb {
    background-image: url("../assets/illicoweb.png");
    &:before {
      content: "illico TV";
    }
  }
  &.coming-soon {
    // background-image: url("../assets/illicoweb.png");
    &:before {
      content: "coming soon";
    }
  }
}
</style>
