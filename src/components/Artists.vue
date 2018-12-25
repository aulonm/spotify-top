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
        <VList>
          <VListTile
            v-for="item in topArtists.items"
            :key="item.id"
            avatar
            @click="getArtist(topArtists)"
          >
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
import { mapState } from 'vuex';

export default {
  name: 'Artists',
  computed: mapState(['topArtists']),
  methods: {
    getArtist(item) {
      console.log(item); // eslint-disable-line
    },
  },
};
</script>

<style scoped>

</style>
