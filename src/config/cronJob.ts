import fetchWeatherData from '../services/weatherService/dataCollector';
import { insertWeatherData } from '../services/database';
import sendWeatherData from '../services/placeholderService/dataSender';
import { CronJob } from 'cron';

const job = new CronJob('*/1 * * * *', async () => {
    console.log('Cron job running...');

    const weatherData = await fetchWeatherData();

    if (weatherData) {
        await insertWeatherData(weatherData);
        await sendWeatherData(weatherData);
    }
});

export default job;
