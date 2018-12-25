<template>
  <VLayout row>
    <VFlex
      xs12
      sm8
      offset-sm2
    >
      <VCard>
        <VToolbar
          dark
        >
          <VToolbarTitle>Top tracks</VToolbarTitle>
        </VToolbar>
        <VList>
          <VListTile
            v-for="item in topTracks.items"
            :key="item.id"
            avatar
            @click="getTrack(item)"
          >
            <VListTileContent>
              <VListTileTitle v-text="compileArtistTracks(item)" />
            </VListTileContent>

            <VListTileAvatar>
              <img :src="item.album.images[2].url">
            </VListTileAvatar>
          </VListTile>
        </VList>
      </VCard>
    </VFlex>
  </VLayout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Tracks',
  computed: mapState(['topTracks']),
  methods: {
    compileArtistTracks(track) {
      let information = `${track.artists[0].name}`;

      if (track.artists.length > 1) {
        track.artists.forEach((item, index) => {
          if (index === 0) return;
          information = `${information}, ${item.name}`;
        });
      }

      return `${information} - ${track.album.name}`;
    },
    getTrack(item) {
        console.log(item); // eslint-disable-line
    },
  },
};
</script>

<style scoped>

</style>
