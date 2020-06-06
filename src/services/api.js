const URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog/";

const api = {
  getAll: () => fetch(URL).then((response) => response.json()),
};

export default api;
