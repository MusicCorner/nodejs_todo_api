import bodyParser from 'body-parser';

export default function extendExpress(app) {
  app.use(bodyParser.json());
  return app;
}
