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
    &:after {
        @include screen-reader-ready;
    }
    > i {
        font-size: var(--base-button-icon-size);
        transition: font-size var(--the-header-anim-duration) var(--the-header-anim-timing);
        color: $auth-icon-color;
        padding: 0.6em;
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
    }
}
.btn-logout {
    &:after {
        content: "logout";
    }
}
.btn-nav {
    &:after {
        content: "open navigation";
    }
}
</style>