import { getDbConnection } from '../../utils/db/connect.js';

export default async function loginController({ login, password }) {
  const connection = await getDbConnection();

  const users = await connection.query(`SELECT * FROM users WHERE login='${login}' AND password='${password}'`);

  return users;
}
