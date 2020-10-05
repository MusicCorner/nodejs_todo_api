import { getDbConnection } from '../../utils/db/connect.js';

export default async function loginController({ login, password }) {
  const connection = await getDbConnection();

  try {
    const res = await connection.query(`SELECT * FROM todo.users WHERE login='${login}' AND password='${password}'`);
    return res.rows[0] || { status: 200, data: 'no users found' };
  } catch (e) {
    console.log(e);
  }

  return {};
}
