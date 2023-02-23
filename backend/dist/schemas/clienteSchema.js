"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const clienteSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    telefone: joi_1.default.string().required(),
    pix: joi_1.default.string().required(),
    cpf: joi_1.default.string(),
    cnpj: joi_1.default.string(),
    rua: joi_1.default.string().required(),
    bairro: joi_1.default.string().required(),
    cep: joi_1.default.string().required(),
    cidade: joi_1.default.string().required(),
    estado: joi_1.default.string().required()
});
exports.default = clienteSchema;
