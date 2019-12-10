<template>
  <button
    type="button"
    :class="[$style['btn'], $style[btnClass]]"
    :title="btnTitle"
    @click="btnHandler"
  >
    <i class="material-icons">{{ btnIcon }}</i>
  </button>
</template>

<script>
    export default {
        props: {
            btnClass: {
                type: String,
                default () {
                    return 'button';
                }
            },
            btnTitle: {
                type: String,
                default () {
                    return '';
                }
            },
            btnHandler: {
                type: Function,
                default () {
                    return null;
                }
            },
            btnIcon: {
                type: String,
                default () {
                    return '';
                }
            },
        }
    }
</script>

<style lang="scss" module>
.btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  &:hover {
        cursor: pointer;
    }
  > i {
    color: $button-icon-color;
    padding: 0.6em;
  }
  &:after {
    @include screen-reader-ready;
  }
}
.btn-close {
  &:after {
    content: 'close';
  }
}
.btn-login {
    &:after {
        content: "open login";
        @include screen-reader-ready;
    }
    .material-icons {
        color: $color-icon-auth;
    }
}

.btn-logout {
    &:after {
        content: "logout";
        @include screen-reader-ready;
    }
    .material-icons {
        color: $color-icon-auth;
    }
}

.btn-nav {
    &:after {
        content: "open navigation";
        @include screen-reader-ready;
    }
    .material-icons {
        color: $color-icon-nav;
    }
}
</style>