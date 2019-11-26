import Vue from 'vue';

export const eventBus = new Vue({
  methods: {
    openNav () {
      this.$emit('evtBusOpenNav');
    },
    openAuth () {
      this.$emit('evtBusOpenAuth');
    }
  }
});
