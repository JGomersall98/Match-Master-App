import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.94:5000/api',
});

export const FetchRatingByTemperature = async (playerId) => {
  try {
    const response = await api.get(`/v1/ratingbytemperature?playerId=${playerId}`);
    console.log('Fetched rating by temperature:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching rating by temperature:', error);
    throw error;
  }
};
