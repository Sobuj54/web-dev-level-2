import dotenv from 'dotenv';
import app from './app';
import dbConnection from './dbConnection';
import { logError, logInfo } from './shared/logger';

dotenv.config({
  path: './.env',
});

const port = process.env.PORT || 5000;

dbConnection()
  .then(() => {
    app.on('error', (err) => {
      logError('db connection error', err);
      throw err;
    });

    app.listen(port, () => {
      logInfo(`server is running at port ${port}`);
    });
  })
  .catch((err) => {
    logError(err.message);
  });
