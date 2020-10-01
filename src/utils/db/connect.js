import PG from 'pg';
import { DB_CONFIG } from '../../common/constants.js';
import { handleError } from '../errorsHandler.js';

export const initConnection = async () => {
  const { Client } = PG;
  const client = new Client(DB_CONFIG);

  try {
    await client.connect();

    return client;
  } catch (e) {
    return handleError(e);
  }
};
