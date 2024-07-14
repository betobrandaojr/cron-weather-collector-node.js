import pool from '../../config/dbConfig';
import { WeatherData } from '../../entities/WeatherData';

const insertWeatherData = async (data: WeatherData) => {
    const query = `
    INSERT INTO weather_data (temperature, windspeed)
    VALUES ($1, $2)
    RETURNING id;
  `;
    const values = [data.temperature, data.windspeed];
    try {
        const result = await pool.query(query, values);
        console.log('Data inserted with ID:', result.rows[0].id);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
};

export { insertWeatherData };
