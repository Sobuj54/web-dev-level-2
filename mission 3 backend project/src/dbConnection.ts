import mongoose from 'mongoose';
import { errorLogger, infoLogger } from './shared/logger';

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    infoLogger.info(
      `Mongodb connection uri: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    errorLogger.error('mongodb connectio error: ', error);
    process.exit(1);
  }
};

export default dbConnection;
