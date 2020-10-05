import PG from 'pg';
import { DB_CONFIG } from '../../common/constants.js';
import { handleError } from '../errorsHandler.js';

let dbConnection;

export const getDbConnection = async () => {
  if (dbConnection) {
    return dbConnection;
  }

  const { Client } = PG;
  const client = new Client(DB_CONFIG);

  try {
    await client.connect();
    dbConnection = client;

    return client;
  } catch (e) {
    return handleError(e);
  }
};

export default () => { };
