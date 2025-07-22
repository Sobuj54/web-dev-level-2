import dotenv from "dotenv";
import app from "./app";
import dbConnection from "./db/dbConnection";

dotenv.config({
  path: "./.env",
});

const port: string | number = process.env.PORT || 5000;

dbConnection()
  .then(() => {
    app.on("error", (err) => {
      console.log(err);
      throw err;
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed: ", err);
  });
