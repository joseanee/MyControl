"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
async function insert(data) {
    await database_1.default.purchase.create({ data });
}
;
async function registerBoughtProduct(data) {
    await database_1.default.purchaseProduct.create({ data });
}
async function getPurchaseByClientId(clientId) {
    return await database_1.default.purchase.findFirst({ where: { clientId }, orderBy: { id: 'desc' } });
}
;
async function getPurchasesByClientId(clientId) {
    return await database_1.default.purchase.findMany({ where: { clientId }, orderBy: { id: 'desc' } });
}
;
async function getPurchaseById(id) {
    return await database_1.default.purchase.findFirst({ where: { id } });
}
async function getClientPurchases(purchaseId) {
    return await database_1.default.purchaseProduct.findMany({
        where: {
            purchaseId
        },
        select: {
            id: true,
            price: true,
            quantity: true,
            produto: {}
        }
    });
}
async function addPayment(data) {
    await database_1.default.purchase.update({ where: { id: data.id }, data });
}
;
async function getClientPurchasesByDate(clientId, initial, final) {
    return await database_1.default.purchase.findMany({ where: { clientId, createdAt: {
                lte: final,
                gte: initial
            } } });
}
const purchaseRepository = {
    insert,
    getClientPurchases,
    getClientPurchasesByDate,
    getPurchaseByClientId,
    getPurchasesByClientId,
    getPurchaseById,
    registerBoughtProduct,
    addPayment
};
exports.default = purchaseRepository;
