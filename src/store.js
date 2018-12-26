import Vue from 'vue';
import Vuex from 'vuex';
import { getTopTracks, getTopArtists } from './util/api';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    topTracks: {},
    topArtists: {},
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
    GET_TOP_TRACKS({ commit }, { limit, offset, timeRange }) {
      return getTopTracks(limit, offset, timeRange)
        .then((response) => {
          commit('SET_TOP_TRACKS', { tracks: response });
          return Promise.resolve({ topTracks: this.state.topTracks });
        })
        .catch((error) => {
          commit('GET_FAILED', { error });
        });
    },
    GET_TOP_ARTISTS({ commit }, { limit, offset, timeRange }) {
      return getTopArtists(limit, offset, timeRange)
        .then((response) => {
          commit('SET_TOP_ARTISTS', { artists: response });
          return Promise.resolve({ topArtists: this.state.topArtists });
        })
        .catch((error) => {
          commit('GET_FAILED', { error });
        });
    },
  },
});
