import { Router } from "express";
import clienteRouter from "./clienteRouter";

const mainRouter = Router();

mainRouter.use(clienteRouter);

export default mainRouter;