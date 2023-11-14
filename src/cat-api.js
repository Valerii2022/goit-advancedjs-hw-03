import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_eHSvO4TLSWTzYqCyrvJFZTIkNtmC5qY8lR5EzJI3CtDw9iWFM8sR8B3RRNgqKKtM';

export const fetchBreeds = async () => {
  const BASE_URL = `https://api.thecatapi.com/v1/breeds`;
  return axios
    .get(BASE_URL)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
};

export const fetchCatInfo = async id => {
  const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}125`;
  return axios
    .get(BASE_URL)
    .then(res => {
      if (res.data.length === 0) {
        throw new error();
      }
      return res.data;
    })
    .catch(err => console.log(err));
};
