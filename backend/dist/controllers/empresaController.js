"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = void 0;
const empresaServices_1 = __importDefault(require("../services/empresaServices"));
async function getInfo(req, res) {
    const info = await empresaServices_1.default.getData();
    return res.status(200).send(info);
}
exports.getInfo = getInfo;
