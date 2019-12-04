<template>
  <div class="site-nav" id="site-nav">
    <transition name="fading" mode="in-out">
      <div class="bg-canvas" v-show="isShow" @click="closeNav()" title="close navigation"></div>
    </transition>
    <transition name="slide">
      <div class="navigation" v-show="isShow" id="navigation">
        <button type="button" class="btn-close" @click="closeNav()" title="close navigation">
          <i class="material-icons">close</i>
        </button>
        <div class="content">
          <app-lang />
          <app-page-links />
          <app-social-media />
          <app-copyright></app-copyright>
        </div>
      </div>
    </transition>
  </div>
</template>

<script src="./navigation.js"/>
<style scoped lang="scss" src="./navigation.scss"/>
