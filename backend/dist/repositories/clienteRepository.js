"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
async function insert(data) {
    await database_1.default.cliente.create({ data });
}
;
async function getClients() {
    return await database_1.default.cliente.findMany({ orderBy: [{ id: 'desc' }] });
}
;
async function clientByName(name) {
    return await database_1.default.cliente.findFirst({ where: { name } });
}
;
async function clientById(id) {
    return await database_1.default.cliente.findFirst({ where: { id } });
}
;
async function updateClienteInfo(data) {
    data.id = Number(data.id);
    await database_1.default.cliente.update({
        where: {
            id: data.id
        },
        data
    });
}
async function removeCliente(id) {
    await database_1.default.cliente.delete({ where: { id } });
}
const clienteRepository = {
    insert,
    getClients,
    clientByName,
    updateClienteInfo,
    removeCliente,
    clientById
};
exports.default = clienteRepository;
