import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.94:5000/api'
  //baseURL: 'http://gommy3009wol.ddns.net:5000/api'
});

export const FetchPlayerCard = async (playerId) => {
  console.log('Attempting to fetch player card for playerId:', playerId);
  try {
    const response = await api.get(`/v1/playercard?playerId=${playerId}`);
    console.log('Player card data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching player card:', error);
    throw error;
  }
};
