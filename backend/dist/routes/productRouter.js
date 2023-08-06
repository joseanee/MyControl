"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productValidation_1 = __importDefault(require("../middlewares/productValidation"));
const productRouter = (0, express_1.Router)();
productRouter.post('/products/add', productValidation_1.default, productController_1.newProduct);
productRouter.delete('/products/:id/delete', productController_1.removeProduct);
productRouter.get('/products', productController_1.getProducts);
exports.default = productRouter;
