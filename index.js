import http from 'http';
import { API_CONFIG } from './src/common/constants.js';

const httpServer = http.createServer((request, response) => {
	response.end(JSON.stringify({ status: 200 }));
}).listen(API_CONFIG.PORT);

console.info(`server is listening on port`, API_CONFIG.PORT);
