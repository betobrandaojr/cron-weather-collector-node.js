import dotenv from 'dotenv';
import job from './config/cronJob';

dotenv.config();

job.start();
console.log('Cron job started, collecting data every minute.');
