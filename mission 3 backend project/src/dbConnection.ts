import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`,
    );
    console.log(
      `Mongodb connection uri: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log('mongodb connectio error: ', error);
    process.exit(1);
  }
};

export default dbConnection;
