"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresaRepository_1 = __importDefault(require("../repositories/empresaRepository"));
async function getData() {
    return await empresaRepository_1.default.getInfo();
}
;
const empresaServices = {
    getData
};
exports.default = empresaServices;
