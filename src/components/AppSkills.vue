<template>
  <div :class="$style['skills']">
    <h3 :class="$style['heading-3']">
      {{ $t('skills.heading') }}
    </h3>
    <AppSkillsList
      v-if="skills.length > 0"
      :skills="skills"
      :ratings="ratings"
      :ratings-length="ratingsLength"
    />
    <BaseErrorRequest
      v-show="isErrorRequest"
      :error-code="errorRequestCode"
    />
  </div>
</template>

<script>
    import { _getSkills, _getRatings } from '@/firebase';
    import AppSkillsList from './AppSkillsList';
    import BaseErrorRequest from './base/BaseErrorRequest';

    export default {
        components: {
            BaseErrorRequest,
            AppSkillsList
        },
        data () {
            return {
                skills: [],
                ratings: {},
                ratingsLength: 0,
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        beforeCreate () {
            _getRatings()
                .then(doc => {
                    this.isErrorRequest = false;
                    this.errorRequestCode = null;
              
                    if (doc.exists) {
                        /* let ratingsLocale = doc.data();

                        Object.keys(ratingsLocale).forEach(key => {
                            console.log('TLC: beforeCreate -> key', key);
                            console.log('TLC: beforeCreate -> ratingsLocale[key]', ratingsLocale[key]);
                            switch (key) {
                            case 1:
                                ratingsLocale[key] = this.$t('skills.ratings.basic');
                                break;
                            case 2:
                                ratingsLocale[key] = this.$t('skills.ratings.average');
                                break;
                            case 3:
                                ratingsLocale[key] = this.$t('skills.ratings.good');
                                break;
                            case 4:
                                ratingsLocale[key] = this.$t('skills.ratings.very-good');
                                break;
                            case 5:
                                ratingsLocale[key] = this.$t('skills.ratings.expert');
                                break;
                            default:
                            }
                        });
                        
                        console.log('TLC: beforeCreate -> ratingsLocale', ratingsLocale); */

                        this.ratings = doc.data();
                        this.ratingsLength = Object.keys(this.ratings).length; // key() returns an array

                        _getSkills()
                            .then(querySnapshots => {
                                if (!querySnapshots.empty) {
                                    querySnapshots.forEach(element => {
                                        this.skills.push(element.data());
                                    });
                                } else {
                                    // console.log('TLC: beforeCreate -> skills list empty');
                                    this.skills = [];
                                }
                            })
                            .catch(err => {
                                this.isErrorRequest = true;
                                this.errorRequestCode = err.code;
                            });
                    } else {
                        // console.log('TLC: beforeCreate -> ratings list empty');
                        this.ratings = {};
                    }
                })
                .catch(err => {
                    this.isErrorRequest = true;
                    this.errorRequestCode = err.code;
                });
        }
    };

</script>

<style lang="scss" module>
.skills {
    width: var(--skills-width);

}
.heading-3 {}
</style>