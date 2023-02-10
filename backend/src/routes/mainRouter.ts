import { Router } from "express";
import clienteRouter from "./clienteRouter";
import empresaRouter from "./empresaRouter";

const mainRouter = Router();

mainRouter.use(clienteRouter);
mainRouter.use(empresaRouter);

export default mainRouter;