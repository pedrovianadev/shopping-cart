import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const makeList = document.querySelector('.products');

function loading() {
  const load = document.createElement('h1');
  load.innerText = 'carregando...';
  load.className = 'loading';
  makeList.appendChild(load);
}

function removeLoad() {
  const load = document.querySelector('.loading');
  load.remove();
}

loading();

const list = await fetchProductsList('computador');

list.forEach((element) => {
  const productItem = createProductElement(element);
  makeList.appendChild(productItem);
});

removeLoad();
