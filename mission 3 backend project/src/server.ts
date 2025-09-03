import dotenv from 'dotenv';
import app from './app';
import dbConnection from './dbConnection';
import { errorLogger, infoLogger } from './shared/logger';

dotenv.config({
  path: './.env',
});

const port = process.env.PORT || 5000;

dbConnection()
  .then(() => {
    app.on('error', (err) => {
      errorLogger.error(err);
      throw err;
    });

    app.listen(port, () => {
      infoLogger.info(`server is running at port ${port}`);
    });
  })
  .catch((err) => {
    errorLogger.error(err.message);
  });
