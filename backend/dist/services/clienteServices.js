"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../middlewares/errorHandler");
const clienteRepository_1 = __importDefault(require("../repositories/clienteRepository"));
async function register(data) {
    try {
        await clienteRepository_1.default.insert(data);
    }
    catch (error) {
        console.log(error);
        throw (0, errorHandler_1.checkError)(409, "registration failed");
    }
}
;
async function findAll() {
    return await clienteRepository_1.default.getClients();
}
;
async function findByName(name) {
    return await clienteRepository_1.default.clientByName(name);
}
;
async function findById(id) {
    return await clienteRepository_1.default.clientById(id);
}
;
async function updateClientInfo(data) {
    await clienteRepository_1.default.updateClienteInfo(data);
}
;
async function removeClienteById(id) {
    await clienteRepository_1.default.removeCliente(id);
}
;
const clienteServices = {
    register,
    findAll,
    findByName,
    updateClientInfo,
    removeClienteById,
    findById
};
exports.default = clienteServices;
