import './mocks/fetchSimulator';
import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import product from './mocks/product';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('testa se fetchProduct é função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Testa se fetch foi chamado ao executar fetchProductList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa fetchProductList com computador', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  // it('Testa se o return de fetchProductList é um objeto em estrutura de dados', async () => {
  //   const object = await fetchProductsList('computador');
  //   expect(object.results).toHaveBeenCalled(computadorSearch);
  // });
  it('Testa fetchProductList sem param se retorna erro "Termo de busca não informado"', async () => {
    expect(fetchProductsList()).rejects.toThrow(Error);
  });
});
