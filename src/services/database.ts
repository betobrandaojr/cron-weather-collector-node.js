import { Pool } from 'pg';
import dotenv from 'dotenv';
import { WeatherData } from '../entities/WeatherData';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT),
});

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
export default pool;
