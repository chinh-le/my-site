<template>
  <a
    :href="linkHref"
    :target="linkTarget"
    :class="[$style['link'], $style[linkClass]]"
    :title="linkTitle"
  >
    <i class="material-icons">{{ linkIcon }}</i>
  </a>
</template>

<script>
    export default {
        props: {
            linkHref: {
                type: String,
                default: () => ''
            },
            linkTarget: {
                type: String,
                default: () => '_blank'
            },
            linkClass: {
                type: String,
                default: () => ''
            },
            linkTitle: {
                type: String,
                default: () => ''
            },
            linkIcon: {
                type: String,
                default: () => ''
            }
        }
        
    }
</script>

<style lang="scss" module>
.link {
    color: $download-icon-color;
    border-radius: 2em;
    &:hover {
        cursor: pointer;
    }
    &:after{
        @include screen-reader-ready;
    }
}
.link-download {
    &:after {
        content: "cloud download";
    }
    > i {
        padding: 0.6em 0.7em 0.6em 0.9em;
    }
}
</style>