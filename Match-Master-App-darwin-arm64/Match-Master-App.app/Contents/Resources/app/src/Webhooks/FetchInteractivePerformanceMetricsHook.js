import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.94:5000/api',
  //baseURL: 'http://gommy3009wol.ddns.net:5000/api'
});

export const FetchInteractivePerformanceMetric = async (playerId, lowTemp, highTemp) => {
  try {
    console.log('Fetching Interactive Metric');
    const response = await api.get(`/v1/interactiveperformancemetric?playerId=${playerId}&lowTemp=${lowTemp}&highTemp=${highTemp}`);
    console.log('Fetched Interactive Metric', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Interactive Metric:', error);
    throw error;
  }
};
