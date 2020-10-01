import http from 'http';
import { API_CONFIG, ENV } from './src/common/constants.js';
import dotenv from 'dotenv';
import { initConnection } from './src/utils/db/connect.js';

const path = ENV.IS_DEV_ENV ? './dev.env' : './production.env';
dotenv.config({ path });

initConnection();

const httpServer = http.createServer((request, response) => {
	response.end(JSON.stringify({ status: 200 }));
}).listen(API_CONFIG.PORT);

console.info(`server is listening on port`, API_CONFIG.PORT);
