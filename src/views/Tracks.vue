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
        <FilterSettings
          :click-function="getTrack"
          :limit="limit"
          :offset="offset"
          :ranges="ranges"
          :time-range="timeRange"
        />
        <VList>
          <VListTile
            v-for="(item, index) in dataTopTracks.items"
            :key="item.id"
            avatar
          >
            <VListTileAction>
              <span>{{ index + 1 }}</span>
            </VListTileAction>
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
import FilterSettings from '../components/FilterSettings.vue';

export default {
  name: 'Tracks',
  components: { FilterSettings },
  data() {
    return {
      limit: 20,
      offset: 0,
      timeRange: 'medium_term',
      ranges: [
        { value: 'short_term', name: '4 weeks' },
        { value: 'medium_term', name: '6 months' },
        { value: 'long_term', name: 'Years' },
      ],
      dataTopTracks: this.$store.state.topTracks,
    };
  },
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
    getTrack(limit, offset, timeRange) {
      this.$store.dispatch('GET_TOP_TRACKS', { limit, offset, timeRange })
        .then((response) => {
          this.dataTopTracks = response.topTracks;
        });
    },
  },
};
</script>
