import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('/api/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const saveData = async (data) => {
  try {
    const response = await axios.post('/api/data', data);
    return response.data;
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};