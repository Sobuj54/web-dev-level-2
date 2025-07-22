import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// route imports
import userRouter from "./app/user/user.routes";
import errorHandler from "./utils/errorHandler";

app.use("/api/v1/users", userRouter);

app.use(errorHandler);

export default app;
