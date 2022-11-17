export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (computador) => {
  if (!computador) throw new Error('Termo de busca não informado');
  const urlSearch = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  const response = await fetch(urlSearch);
  const data = await response.json();
  return data.results;
};
