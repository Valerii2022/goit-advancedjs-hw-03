import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_eHSvO4TLSWTzYqCyrvJFZTIkNtmC5qY8lR5EzJI3CtDw9iWFM8sR8B3RRNgqKKtM';

const BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchBreeds = () => {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(res => {
      if (res.data.length === 0) {
        throw new Error();
      }
      return res.data;
    })
    .catch(err => console.log(err));
};
