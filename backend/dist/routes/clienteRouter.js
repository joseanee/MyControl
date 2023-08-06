"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = require("../controllers/clienteController");
const clienteValidation_1 = __importDefault(require("../middlewares/clienteValidation"));
const clienteRouter = (0, express_1.Router)();
clienteRouter.post('/register', clienteValidation_1.default, clienteController_1.newClient);
clienteRouter.get('/clients', clienteController_1.getClients);
clienteRouter.get('/clients/:id', clienteController_1.getClientById);
clienteRouter.put('/clients/update/:id', clienteController_1.updateCliente);
clienteRouter.delete('/clients/delete/:id', clienteController_1.removeCliente);
exports.default = clienteRouter;
