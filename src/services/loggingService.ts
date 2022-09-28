import winston from 'winston';
import { config } from '../config';

const transport = new winston.transports.Console({ format: process.env.NODE_ENV === 'production' ? winston.format.json() : winston.format.simple() });

export const logger = winston.createLogger({
  level: config.logLevel,
  transports: [transport],
});
