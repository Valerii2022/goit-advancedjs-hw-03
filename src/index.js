import { fetchBreeds, fetchCatInfo } from './cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('error'),
};

refs.select.addEventListener('change', handleSelectSubmit);

fetchBreeds().then(data => {
  refs.select.innerHTML = selectMarkup(data);
});

function handleSelectSubmit(e) {
  fetchCatInfo(e.target.value).then(data => {
    refs.catInfo.innerHTML = catInfoMarkup(data);
  });
}

function selectMarkup(array) {
  return array
    .map(({ id, name }) => `<option value=${id}>${name}</option>`)
    .join('');
}

function catInfoMarkup(data) {
  return data
    .map(el => {
      return `<div><img src=${el.url} alt=${el.breeds[0].name} width="400"><h2>${el.breeds[0].name}</h2><p>${el.breeds[0].description}</p><p>Temperament: ${el.breeds[0].temperament}</p></div>`;
    })
    .join('');
}
