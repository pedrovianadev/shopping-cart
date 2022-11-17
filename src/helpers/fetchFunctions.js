export const fetchProduct = async (param) => {
  if (!param) throw new Error('ID não informado');

  const url = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
};

export const fetchProductsList = async (computador) => {
  if (!computador) throw new Error('Termo de busca não informado');
  const urlSearch = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  const response = await fetch(urlSearch);
  const data = await response.json();
  return data.results;
};
