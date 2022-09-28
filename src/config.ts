import { config as getConfigFromEnvFile } from 'dotenv';
getConfigFromEnvFile();

const port: Number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const logLevel = process.env.LOG_LEVEL || 'info';

export type Config = {
  port: Number;
  logLevel: string;
};

export const config: Config = {
  port,
  logLevel,
};
