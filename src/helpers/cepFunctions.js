export const getAddress = async (cep) => {
  const urlOne = `https://cep.awesomeapi.com.br/json/${cep}`;
  const urlTwo = `https://brasilapi.com.br/api/cep/v2/${cep}`;

  const response = await Promise.any([
    fetch(urlOne),
    fetch(urlTwo),
  ]);
  const data = await response.json();
  return data;
};

export const searchCep = () => {
  // seu código aqui
};
