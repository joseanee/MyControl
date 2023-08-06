"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = exports.getPurchaseInfo = exports.getStock = exports.getTransactions = exports.getPurchases = exports.newPurchase = void 0;
const purchaseService_1 = __importDefault(require("../services/purchaseService"));
async function newPurchase(req, res) {
    const id = Number(req.params.id);
    await purchaseService_1.default.insert(req.body, id);
    return res.status(201).send("Compra registrada!");
}
exports.newPurchase = newPurchase;
;
async function getPurchases(req, res) {
    const id = Number(req.params.id);
    const { initial, final } = req.query;
    if (initial && final) {
        const purchases = await purchaseService_1.default.getPurchasesByDate(id, initial.toString(), final.toString());
        return res.status(200).send(purchases);
    }
    const purchases = await purchaseService_1.default.getPurchases(id);
    return res.status(200).send(purchases);
}
exports.getPurchases = getPurchases;
;
async function getTransactions(req, res) {
    const id = Number(req.params.id);
    const { initial, final } = req.query;
    if (initial && final) {
        const purchases = await purchaseService_1.default.getTransactions(id, initial.toString(), final.toString());
        return res.status(200).send(purchases);
    }
    return res.status(200).send([]);
}
exports.getTransactions = getTransactions;
;
async function getStock(req, res) {
    const { initial, final } = req.query;
    if (initial && final) {
        const info = await purchaseService_1.default.getStockInfo(initial.toString(), final.toString());
        return res.status(200).send(info);
    }
    return res.status(200).send([]);
}
exports.getStock = getStock;
;
async function getPurchaseInfo(req, res) {
    const id = Number(req.params.id);
    const purchases = await purchaseService_1.default.getPurchaseInfo(id);
    return res.status(200).send(purchases);
}
exports.getPurchaseInfo = getPurchaseInfo;
;
async function addPayment(req, res) {
    const id = Number(req.params.id);
    await purchaseService_1.default.payment(req.body, id);
    return res.status(200).send("OK");
}
exports.addPayment = addPayment;
