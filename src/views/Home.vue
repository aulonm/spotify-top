<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import { login } from '../util/api';

export default {
  components: {
    HelloWorld,
  },
  mounted() {
    if (!localStorage.access_token) {
      login();
    }
    this.$store.dispatch('GET_TOP_TRACKS');
  },
};
</script>
