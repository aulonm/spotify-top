<template>
  <VApp>
    <VToolbar app>
      <VToolbarTitle class="headline text-uppercase">
        <span>SPOTIFY TOP INFORMATION</span>
      </VToolbarTitle>
      <VSpacer />
      <VBtn
        flat
        @click="tracksLink"
      >
        <span class="mr-2">
          Tracks
        </span>
      </VBtn>
      <VBtn
        flat
        @click="artistsLink"
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

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('GET_TOP_TRACKS', { limit: 20, offset: 0, timeRange: 'medium_term' });
  },
  methods: {
    tracksLink() {
      this.$store.dispatch('GET_TOP_TRACKS', { limit: 20, offset: 0, timeRange: 'medium_term' })
        .then(() => {
          this.$router.push({ path: '/tracks' });
        });
    },
    artistsLink() {
      this.$store.dispatch('GET_TOP_ARTISTS', { limit: 20, offset: 0, timeRange: 'medium_term' })
        .then(() => {
          this.$router.push({ path: '/artists' });
        });
    },
  },
};
</script>
