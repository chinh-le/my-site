<template>
  <div>
    <ul class="social-media">
      <li
        v-for="(socialMedia, index) in socialMedias"
        :key="index"
      >
        <a
          :href="socialMedia.url"
          :class="socialMedia.label"
          :title="socialMedia.label"
        >
          <img
            :src="socialMedia.image"
            :alt="socialMedia.label"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    import { _getCollection, _getImgContextPath } from '@/firebase';
    export default {
        data () {
            return {
                socialMedias: []
            };
        },
        created () {
            _getCollection('socialMedia').then(snapshots => {
                // console.log('TLC: created -> snapshots', snapshots);
                if (!snapshots.empty) {
                    snapshots.forEach(element => {
                        let elemData = element.data();
                        if (elemData.image) {
                            elemData.image = _getImgContextPath(
                                `socialMedia/${elemData.image}`
                            );
                        }
                        this.socialMedias.push(elemData);
                    });
                    // console.log('TLC: created -> this.socialMedias', this.socialMedias);
                } else {
                    // console.log('TLC: created -> list empty');
                }
            });
        }
    };
</script>

<style lang="scss" scoped>
.social-media {
  display: flex;
  flex-direction: row;
  align-content: center;
  li {
    line-height: 1em;
  }
  a {
    display: inline-flex;
    > img {
      width: var(--social-icon-dimension);
      height: var(--social-icon-dimension);
      padding: 1.3em;
      }
    &.linkedin {
      &:after {
        content: "linkedin";
      }
    }
    &.github {
      &:after {
        content: "github";
      }
    }
    &.instagram {
      &:after {
        content: "instagram";
      }
    }
    &:after {
      @include screen-reader-ready;
    }
  }
}

.navigation {
  .social-media {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 3em;
  }
}

</style>