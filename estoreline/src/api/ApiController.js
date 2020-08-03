import axios from "axios";
import Axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getProductsByCategory = async (category) => {
  let result = await api.get(`/product/${category}`);
  if (result.status === 200) {
    return result.data;
  }
};

export const getProductFilters = async () => {
  let result = await api.get(`/filter`);
  return result;
};
