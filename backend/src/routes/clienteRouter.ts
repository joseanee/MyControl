import { Router } from "express";
import { getClients, newClient } from "../controllers/clienteController";
import clienteValidation from "../middlewares/clienteValidation";

const clienteRouter = Router();

clienteRouter.post('/register', clienteValidation, newClient);
clienteRouter.get('/clients', getClients);

export default clienteRouter;