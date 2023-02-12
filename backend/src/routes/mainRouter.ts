import { Router } from "express";
import clienteRouter from "./clienteRouter";
import empresaRouter from "./empresaRouter";
import productRouter from "./productRouter";
import pruchaseRouter from "./purchaseRouter";

const mainRouter = Router();

mainRouter.use(clienteRouter);
mainRouter.use(empresaRouter);
mainRouter.use(productRouter);
mainRouter.use(pruchaseRouter);

export default mainRouter;