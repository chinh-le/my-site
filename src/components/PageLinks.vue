<template>
  <nav class="page-links" role="navigation">
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
<style scoped lang="scss">
.page-links {
  display: none;
  position: relative;
  font-family: $font-family-navigation;
  font-size: 2em;
  margin-bottom: 1.5em;
  > ul > li {
    > a {
      color: $color-nav-links;
      padding: 0.5em 0 0.5em 0.5em;
      text-decoration: none;
      display: block;
      &.router-link-exact-active,
      &.current {
        color: $color-nav-links-current;
        > i {
          // background-color: $color-nav-links-current;
          background-color: rgba(179, 106, 18, 0.5em);
        }
      }
      &.link-home {
        &:before {
          content: "Home";
        }
      }
      &.link-about {
        &:before {
          content: "About";
        }
      }
      &.link-works {
        &:before {
          content: "Works";
        }
      }
      &.link-education {
        &:before {
          content: "Education";
        }
      }
      &.link-contact {
        &:before {
          content: "Contact";
        }
      }
      > i {
        display: none;
        width: 0.3em;
        height: 0.3em;
        border-radius: 0.3em;
        // background-color: $color-nav-links;
        background-color: rgba(170, 170, 170, 0.5em);
        font-style: normal;
      }
    }
  }
}
</style>
