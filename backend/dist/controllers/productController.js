"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProduct = exports.getProducts = exports.newProduct = void 0;
const productService_1 = __importDefault(require("../services/productService"));
async function newProduct(req, res) {
    const product = {
        nome: req.body.nome,
        medida: req.body.medida
    };
    await productService_1.default.insert(product);
    return res.status(201).send("Produto registrado!");
}
exports.newProduct = newProduct;
;
async function getProducts(req, res) {
    const { name } = req.query;
    if (name) {
        const product = await productService_1.default.getProduct(name.toString());
        return res.status(200).send(product);
    }
    const products = await productService_1.default.getProducts();
    return res.status(200).send(products);
}
exports.getProducts = getProducts;
async function removeProduct(req, res) {
    const id = Number(req.params.id);
    const products = await productService_1.default.remove(id);
    return res.status(200).send(products);
}
exports.removeProduct = removeProduct;
