import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.94:5000/api'
  //baseURL: 'http://gommy3009wol.ddns.net:5000/api'
});

export const FetchPlayersByPosition = async (position) => {
  try {
    const response = await api.get(`/v1/squadOverview?position=${position}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
