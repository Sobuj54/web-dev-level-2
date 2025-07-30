import dotenv from "dotenv";
import app from "./app";
import dbConnection from "./dbConnection";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5000;

dbConnection()
  .then(() => {
    app.on("error", (err) => {
      console.log(err);
      throw err;
    });

    app.listen(port, () => {
      console.log(`server is running at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
