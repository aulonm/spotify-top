<template>
  <VApp>
    <VToolbar app>
      <VToolbarTitle class="headline text-uppercase">
        <span>SPOTIFY TOP INFORMATION</span>
      </VToolbarTitle>
      <VSpacer />
      <VBtn
        flat
        :to="{ path: tracksLink() }"
      >
        <span class="mr-2">
          Tracks
        </span>
      </VBtn>
      <VBtn
        flat
        :to="{ path: artistsLink() }"
      >
        <span class="mr-2">
          Artists
        </span>
      </VBtn>
    </VToolbar>
    <VContent>
      <RouterView />
    </VContent>
  </VApp>
</template>

<script>
import { login } from './util/api';

export default {
  name: 'App',
  mounted() {
    login();
  },
  methods: {
    tracksLink() {
      this.$store.dispatch('GET_TOP_TRACKS');
      return '/tracks';
    },
    artistsLink() {
      this.$store.dispatch('GET_TOP_ARTISTS');
      return '/artists';
    },
  },
};
</script>
