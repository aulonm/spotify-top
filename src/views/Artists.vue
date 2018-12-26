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
          <VToolbarTitle>Top artists</VToolbarTitle>
        </VToolbar>
        <FilterSettings
          :click-function="getArtists"
          :limit="limit"
          :offset="offset"
          :ranges="ranges"
          :time-range="timeRange"
        />
        <VList>
          <VListTile
            v-for="(item, index) in dataTopArtists.items"
            :key="item.id"
            avatar
          >
            <VListTileAction>
              <span>{{ index + 1 }}</span>
            </VListTileAction>

            <VListTileContent>
              <VListTileTitle v-text="item.name" />
            </VListTileContent>

            <VListTileAvatar>
              <img :src="item.images[2].url">
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
  name: 'Artists',
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
      dataTopArtists: this.$store.state.topArtists,
    };
  },
  methods: {
    getArtists(limit, offset, timeRange) {
      this.$store.dispatch('GET_TOP_ARTISTS', { limit, offset, timeRange })
        .then((response) => { this.dataTopArtists = response.topArtists; });
    },
  },
};
</script>

<style scoped>

</style>
