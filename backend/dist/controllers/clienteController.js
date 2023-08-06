"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCliente = exports.updateCliente = exports.getClientById = exports.getClients = exports.newClient = void 0;
const clienteServices_1 = __importDefault(require("../services/clienteServices"));
async function newClient(req, res) {
    await clienteServices_1.default.register(req.body);
    return res.status(201).send("Registrado!");
}
exports.newClient = newClient;
;
async function getClients(req, res) {
    const name = req.query.name;
    if (name) {
        const client = await clienteServices_1.default.findByName(name.toString());
        return res.status(200).send(client);
    }
    const clients = await clienteServices_1.default.findAll();
    return res.status(200).send(clients);
}
exports.getClients = getClients;
;
async function getClientById(req, res) {
    const id = Number(req.params.id);
    const client = await clienteServices_1.default.findById(id);
    return res.status(200).send(client);
}
exports.getClientById = getClientById;
;
async function updateCliente(req, res) {
    await clienteServices_1.default.updateClientInfo(req.body);
    return res.status(200).send('Registro do cliente atualizado!');
}
exports.updateCliente = updateCliente;
async function removeCliente(req, res) {
    const id = Number(req.params.id);
    await clienteServices_1.default.removeClienteById(id);
    return res.status(200).send("Cliente removido!");
}
exports.removeCliente = removeCliente;
