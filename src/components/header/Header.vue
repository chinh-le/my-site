<template>
  <header>
    <div class="site-header" id="site-header">
      <app-logo />
      <app-social-media />
      <div class="login-nav">
        <a
          v-show="authenticated && downloadUrl"
          :href="downloadUrl"
          target="_blank"
          class="btn-download"
          title="download resume"
        >
          <i class="material-icons">cloud_download</i>
        </a>
        <button v-show="!authenticated" class="btn-login" @click="openAuth()" title="sign in">
          <i class="material-icons">person_outline</i>
        </button>
        <button v-show="authenticated" class="btn-logout" @click="signout()" title="sign out">
          <i class="material-icons">person</i>
        </button>
        <button class="btn-nav" @click="openNav()" title="open navigation">
          <i class="material-icons">dehaze</i>
        </button>
      </div>
    </div>
  </header>
</template>

<script src="./header.js"/>
<style scoped lang="scss" src="./header.scss"/>
