import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const makeList = document.querySelector('.products');

const list = await fetchProductsList('computador');

list.forEach((element) => {
  const productItem = createProductElement(element);
  makeList.appendChild(productItem);
});
