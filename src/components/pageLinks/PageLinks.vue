<template>
  <nav class="page-links" role="navigation" :style="posX">
    <ul class>
      <li class>
        <router-link to="/" class="link-home" title="Home">
          <i />
        </router-link>
      </li>
      <li class>
        <router-link to="/about" class="link-about" title="About">
          <i />
        </router-link>
      </li>
      <li class>
        <router-link to="/works" class="link-works" title="Works">
          <i />
        </router-link>
      </li>
      <li class>
        <router-link to="/education" class="link-education" title="Education">
          <i />
        </router-link>
      </li>
      <li class>
        <router-link to="/contact" class="link-contact" title="Contact">
          <i />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script src="./pageLinks.js"/>
<style scoped lang="scss" src="./pageLinks.scss"/>
