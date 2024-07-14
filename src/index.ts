import dotenv from 'dotenv';
import fetchWeatherData from './services/dataCollector';
import { insertWeatherData } from './services/database';
import sendWeatherData from './services/dataSender';
import { CronJob } from 'cron';

dotenv.config();

const job = new CronJob('*/1 * * * *', async () => {
    console.log('Cron job running...');

    const weatherData = await fetchWeatherData();

    if (weatherData) {
        await insertWeatherData(weatherData);
        await sendWeatherData(weatherData);
    }
});

job.start();
console.log('Cron job started, collecting data every minute.');
