import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.94:5000/api'
  //baseURL: 'http://gommy3009wol.ddns.net:5000/api'
});

export const updateDatabase = async () => {
  try {
    const response = await api.post('/v1/updatedatabase');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};