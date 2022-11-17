import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const makeList = document.querySelector('.products');

const load = document.createElement('h1');
load.innerText = 'carregando...';
load.className = 'loading';
makeList.appendChild(load);

try {
  const list = await fetchProductsList('computador');
  const rmvLoad = document.querySelector('.loading');
  rmvLoad.remove();

  list.forEach((element) => {
    const productItem = createProductElement(element);
    makeList.appendChild(productItem);
  });
} catch (error) {
  const makeMsg = document.createElement('p');
  const msg = 'Algum erro ocorreu, recarregue a página e tente novamente';
  makeMsg.innerText = msg;
  makeMsg.className = 'error';
  makeList.appendChild(makeMsg);
}
