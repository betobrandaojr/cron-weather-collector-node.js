import axios from 'axios';
import { WeatherData } from '../entities/WeatherData';

const fetchWeatherData = async (): Promise<WeatherData | null> => {
    try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true');

        const data = response.data.current_weather;
        const weatherData: WeatherData = {
            temperature: data.temperature,
            windspeed: data.windspeed,
        };

        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

export default fetchWeatherData;
