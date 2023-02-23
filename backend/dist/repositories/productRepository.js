"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
async function insert(data) {
    await database_1.default.produto.create({ data });
}
;
async function getProducts() {
    return await database_1.default.produto.findMany();
}
;
async function getByName(name) {
    return await database_1.default.produto.findFirst({ where: { nome: name } });
}
;
async function deleteProduct(id) {
    await database_1.default.produto.delete({ where: { id } });
}
const productRepository = {
    insert,
    getProducts,
    getByName,
    deleteProduct
};
exports.default = productRepository;
