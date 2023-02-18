"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteRouter_1 = __importDefault(require("./clienteRouter"));
const empresaRouter_1 = __importDefault(require("./empresaRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const purchaseRouter_1 = __importDefault(require("./purchaseRouter"));
const mainRouter = (0, express_1.Router)();
mainRouter.use(clienteRouter_1.default);
mainRouter.use(empresaRouter_1.default);
mainRouter.use(productRouter_1.default);
mainRouter.use(purchaseRouter_1.default);
exports.default = mainRouter;
