<template>
  <div id="app">
    <!-- <img src="@/assets/shutterstock-education.jpg" alt class="body-img-bg" /> -->
    <app-header />
    <main class="site-wrap" id="site-wrap">
      <transition name="fading" mode="out-in">
        <router-view />
      </transition>
    </main>
    <app-footer />
    <app-navigation />
    <app-authentication />
    <app-page-links />
  </div>
</template>

<script src="./app.js"/>
<style scoped lang="scss" src="./app.scss"/>
