"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
async function getInfo() {
    return await database_1.default.empresa.findFirst();
}
;
const empresaRepository = {
    getInfo
};
exports.default = empresaRepository;
