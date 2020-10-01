import PG from 'pg';
import { handleError } from '../errorsHandler.js';

export const initConnection = async () => {
  const { Client } = PG;
  const client = new Client();

  try {
    await client.connect();

    return client;
  } catch (e) {
    return handleError(e);
  }
};
