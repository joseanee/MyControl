import { Router } from "express";
import { getClientById, getClients, newClient, removeCliente, updateCliente } from "../controllers/clienteController";
import clienteValidation from "../middlewares/clienteValidation";

const clienteRouter = Router();

clienteRouter.post('/register', clienteValidation, newClient);
clienteRouter.get('/clients', getClients);
clienteRouter.get('/clients/:id', getClientById);
clienteRouter.put('/clients/update/:id', updateCliente);
clienteRouter.delete('/clients/delete/:id', removeCliente);

export default clienteRouter;