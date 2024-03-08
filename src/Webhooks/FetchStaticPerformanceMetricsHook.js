import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.3.94:5000/api',
  //baseURL: 'http://gommy3009wol.ddns.net:5000/api'
  baseURL: 'https://match-master-test.azurewebsites.net/api'
});

export const FetchStaticPerformanceMetric = async (playerId) => {
  try {
    console.log('Fetching Static Metric');
    const response = await api.get(`/v1/staticperformancemetriccontroller?playerId=${playerId}`);
    console.log('Fetched Static Metric', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Static Metric:', error);
    throw error;
  }
};
