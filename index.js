import express from 'express';
import { API_CONFIG, ENV } from './src/common/constants.js';
import dotenv from 'dotenv';
import { initConnection } from './src/utils/db/connect.js';
import extendExpress from './src/utils/express.use.js';
import initRoutes from './src/routes/index.js';

const path = ENV.IS_DEV_ENV ? './dev.env' : './production.env';
dotenv.config({ path });

initConnection();

const app = initRoutes(extendExpress(express()));

app.listen(API_CONFIG.PORT, () => {
  console.info('server is listening on port', API_CONFIG.PORT);
});
