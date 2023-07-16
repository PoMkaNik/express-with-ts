import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
// single router for the app
import { AppRouter } from './AppRouter';
// rootController
import './controllers/RootController';
// loginController
import './controllers/LoginController';

const app = express();
// app-level middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdasdsadasdadasdd'] }));
// routes
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on post 3000');
});
