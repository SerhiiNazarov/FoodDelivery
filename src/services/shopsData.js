import axios from 'axios';
axios.defaults.baseURL = 'https://646e13da9c677e23218b05dd.mockapi.io';

export const shopsData = async () => {
  const { data } = await axios.get('/dishes');

  return data;
};
