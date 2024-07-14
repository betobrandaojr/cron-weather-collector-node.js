import axios from 'axios';
import { WeatherData } from '../entities/WeatherData';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const sendWeatherData = async (data: WeatherData) => {
    try {
        const response = await axios.post(API_URL, data);
        console.log('Data sent to JSONPlaceholder, response status:', response.status);
    } catch (error) {
        console.error('Error sending data to JSONPlaceholder:', error);
    }
};

export default sendWeatherData;
