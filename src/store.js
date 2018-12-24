import Vue from 'vue';
import Vuex from 'vuex';
import { getTopTracks, getTopArtists } from './util/api';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    topTracks: {},
    error: {},
  },
  debug,
  mutations: {
    SET_TOP_TRACKS: (state, { tracks }) => {
      const newState = state;
      newState.topTracks = tracks;
    },
    SET_TOP_ARTISTS: (state, { artists }) => {
      const newState = state;
      newState.topArtists = artists;
    },
    GET_FAILED: (state, { error }) => {
      const newState = state;
      newState.error = error;
    },
  },
  actions: {
    GET_TOP_TRACKS({ commit }) {
      getTopTracks().then((response) => {
        commit('SET_TOP_TRACKS', { tracks: response });
      }).catch((error) => {
        commit('GET_FAILED', { error });
      });
    },
    GET_TOP_ARTISTS({ commit }) {
      getTopArtists().then((response) => {
        commit('SET_TOP_ARTISTS', { artists: response });
      }).catch((error) => {
        commit('GET_FAILED', { error });
      });
    },
  },
});
