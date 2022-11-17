import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const makeList = document.querySelector('.products');
const cart = document.querySelector('.cart__products');

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

makeList.addEventListener('click', async (param) => {
  if (param.target.className === 'product__add') {
    const targetItem = param.target;
    const id = targetItem.parentNode.firstChild.innerText;
    saveCartID(id);
    const result = await fetchProduct(id);
    const productCart = createCartProductElement(result);
    cart.appendChild(productCart);
  }
});

if (localStorage.cartProducts) {
  JSON.parse(localStorage.cartProducts).map(async (e) => {
    const result = await fetchProduct(e);
    const productCart = createCartProductElement(result);
    cart.appendChild(productCart);
  });
}
