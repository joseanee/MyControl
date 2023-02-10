import { Router } from "express";
import { newClient } from "../controllers/clienteController";
import clienteValidation from "../middlewares/clienteValidation";

const clienteRouter = Router();

clienteRouter.post('/register', clienteValidation, newClient);

export default clienteRouter;