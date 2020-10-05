import { ROUTES } from '../common/constants.js';

export default function initRoutes(app) {
  app.get(ROUTES.LOGIN, (req, res) => {
    console.log('here should be queries', req);
    res.end('test');
  });

  return app;
}
