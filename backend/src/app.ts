import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import mainRouter from "./routes/mainRouter";

const app = express();

app.use(json());
app.use(cors());
app.use(errorHandler);
app.use(mainRouter);

export default app;