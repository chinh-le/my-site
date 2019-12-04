<template>
  <div class="about">
    <div class="heading" :style="posX">
      <h1>About me</h1>
    </div>
    <div class="content">
      <div class="desc">
        <h2>
          <span class="color-focus">Responsive site</span>, mobile and desktop
        </h2>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et eaque vel
          repellendus tempore ipsa cum aliquid saepe. Atque et qui repellat aliquid autem quibusdam error
          nihil possimus velit molestiae!
        </p>
      </div>
      <app-skills></app-skills>
    </div>
  </div>
</template>

<script src="./about.js"/>
<style scoped lang="scss" src="./about.scss"/>
