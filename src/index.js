import { fetchBreeds, fetchCatByBreed } from './cat-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';

const refs = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
};

refs.select.addEventListener('change', handleSelectSubmit);

fetchBreeds()
  .then(data => onSuccess(data))
  .catch(() => {
    refs.select.classList.add('hidden');
    onError();
  });

function handleSelectSubmit(e) {
  refs.loader.classList.remove('hidden');
  refs.catInfo.classList.add('hidden');
  fetchCatByBreed(e.target.value)
    .then(data => {
      refs.catInfo.classList.remove('hidden');
      refs.loader.classList.add('hidden');
      refs.catInfo.innerHTML = catInfoMarkup(data);
    })
    .catch(() => onError());
}

function catInfoMarkup(data) {
  return data
    .map(el => {
      return `<div class="img-wrap"><img src=${el.url} alt=${el.breeds[0].name} ></div>
  <div class="content">
    <h2>${el.breeds[0].name}</h2>
    <p>${el.breeds[0].description}</p>
    <p><span>Temperament:</span> ${el.breeds[0].temperament}</p>
  </div>`;
    })
    .join('');
}

function onSuccess(data) {
  refs.loader.classList.add('hidden');
  refs.select.classList.remove('hidden');
  const selectData = data.map(el => {
    return { text: el.name, value: el.id };
  });
  new SlimSelect({
    select: '.breed-select',
    data: selectData,
    settings: {
      searchPlaceholder: 'Search your breed!',
    },
  });
}

function onError() {
  iziToast.error({
    title: 'Error',
    message: `Oops! Something went wrong! Try reloading the page!`,
    layout: 2,
    position: 'topLeft',
    transitionIn: 'fadeInRight',
    transitionOut: 'fadeOutLeft',
  });
}
