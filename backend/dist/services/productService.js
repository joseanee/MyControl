"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
async function insert(data) {
    await productRepository_1.default.insert(data);
}
;
async function getProduct(name) {
    return await productRepository_1.default.getByName(name);
}
;
async function getProducts() {
    return await productRepository_1.default.getProducts();
}
;
async function remove(id) {
    await productRepository_1.default.deleteProduct(id);
}
const productServices = {
    insert,
    getProduct,
    getProducts,
    remove
};
exports.default = productServices;
