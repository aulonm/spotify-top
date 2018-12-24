import axios from 'axios';

const login = (newToken = false) => {
  const clientId = '864189e74c304594a7116130f8627506';
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const redirectUri = 'http://localhost:8081/spotify-top/#/';
  const scopes = ['user-top-read'];

  if (newToken === true) {
    window.location = `${authEndpoint}?client_id=${clientId}&scope=${scopes.join('%20')}&response_type=token&redirect_uri=${redirectUri}`;
  }

  window.location.hash.substring(2).split('&').forEach((item) => {
    if (item) {
      const parts = item.split('=');
      localStorage.setItem(parts[0], parts[1]);
    }
  });

  window.location.hash = '';

  if (!localStorage.access_token) {
    window.location = `${authEndpoint}?client_id=${clientId}&scope=${scopes.join('%20')}&response_type=token&redirect_uri=${redirectUri}`;
  }
};

const getTopTracks = (limit = 20, offset = 0, timeRange = 'medium_term') => {
  const url = `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&offset=${offset}&time_range=${timeRange}`;

  return axios({
    method: 'get',
    url,
    headers: {
      Authorization: `Bearer ${localStorage.access_token}`,
    },
  })
    .then(response => response.data)
    .catch((error) => {
      if (error.response.data.error.status === 401) {
        login(true);
      }
      return Promise.reject(error.response.data.error);
    });
};

const getTopArtists = (limit = 20, offset = 0, timeRange = 'medium_term') => {
  const url = `https://api.spotify.com/v1/me/top/artists?limit=${limit}&offset=${offset}&time_range=${timeRange}`;

  return axios({
    method: 'get',
    url,
    headers: {
      Authorization: `Bearer ${localStorage.access_token}`,
    },
  }).then(response => response.data).catch(error => Promise.reject(error.response.data.error));
};

export { login, getTopTracks, getTopArtists };