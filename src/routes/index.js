import { ROUTES } from '../common/constants.js';
import loginController from '../controllers/user/login.js';

export default function initRoutes(app) {
  app.get('/', (req, res) => {
    res.send('API');
  });

  app.get(ROUTES.LOGIN, async (req, res) => {
    const users = await loginController(req);
    console.log(users);
    res.send(users);
  });

  return app;
}
