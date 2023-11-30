import axios from 'axios';
axios.defaults.baseURL = 'https://646e13da9c677e23218b05dd.mockapi.io';

export const ordersData = async data => {
  await axios
    .post('/orders', data)
    .then(response => {
      console.log(response);
      // return response.data;
    })
    .catch(error => {
      console.error(error.message);
    });
};
