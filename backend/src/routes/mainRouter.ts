import { Router } from "express";
import clienteRouter from "./clienteRouter";
import empresaRouter from "./empresaRouter";
import productRouter from "./productRouter";

const mainRouter = Router();

mainRouter.use(clienteRouter);
mainRouter.use(empresaRouter);
mainRouter.use(productRouter);

export default mainRouter;