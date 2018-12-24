export default {
  get apiUrl() {
    return process.env.NODE_ENV === 'production'
      ? 'https://aulonm.github.io/spotify-top/'
      : 'http://localhost:8081/spotify-top/';
  },
};
