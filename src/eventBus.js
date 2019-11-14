import Vue from 'vue';

export const eventBus = new Vue({
  methods: {
    openNav () {
      this.$emit('ebOpenNav');
    },
    openAuth () {
      this.$emit('ebOpenAuth');
    }
  }
});
