"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
const clienteRepository_1 = __importDefault(require("../repositories/clienteRepository"));
const purchaseRepository_1 = __importDefault(require("../repositories/purchaseRepository"));
async function insert(data, id) {
    const clientData = {
        clientId: id
    };
    await purchaseRepository_1.default.insert(clientData);
    for (const product of data) {
        const productId = (await productRepository_1.default.getByName(product.name)).id;
        const purchaseId = (await purchaseRepository_1.default.getPurchaseByClientId(id)).id;
        const registerData = {
            productId,
            purchaseId,
            price: Number(product.price),
            quantity: Number(product.quantity)
        };
        await purchaseRepository_1.default.registerBoughtProduct(registerData);
    }
}
;
async function getPurchases(id) {
    return await purchaseRepository_1.default.getPurchasesByClientId(id);
}
;
async function getPurchasesByDate(id, initial, final) {
    const initialDate = new Date(formatStringData(initial));
    const finalDate = new Date(formatStringData(final));
    return await purchaseRepository_1.default.getClientPurchasesByDate(id, initialDate, finalDate);
}
;
async function getPurchaseInfo(id) {
    const purchase = await purchaseRepository_1.default.getPurchaseById(id);
    const cliente = await clienteRepository_1.default.clientById(purchase.clientId);
    const purchases = await purchaseRepository_1.default.getClientPurchases(id);
    const data = {
        fornecedor: cliente.name,
        data: purchase.createdAt,
        formas: purchase.forma,
        detalhes: purchase.detalhe,
        valores: purchase.valor,
        wasPaid: purchase.wasPaid,
        produtos: purchases
    };
    return data;
}
;
async function payment(data, id) {
    const purchase = await purchaseRepository_1.default.getPurchaseById(id);
    const info = await getPurchaseInfo(id);
    if ((calculateTotal(info) - Number(data.valor)) === 0) {
        purchase.wasPaid = true;
    }
    purchase.forma.push(data.forma);
    purchase.detalhe.push(data.detalhe);
    purchase.valor.push(Number(data.valor));
    await purchaseRepository_1.default.addPayment(purchase);
}
;
async function getTransactions(id, initial, final) {
    const initialDate = new Date(formatStringData(initial));
    const finalDate = new Date(formatStringData(final));
    const data = {};
    const purchases = await purchaseRepository_1.default.getClientPurchasesByDate(id, initialDate, finalDate);
    for (const purchase of purchases) {
        const info = await purchaseRepository_1.default.getClientPurchases(purchase.id);
        purchase.product = info;
    }
    for (const purchase of purchases) {
        for (let i = 0; i < purchase.product.length; i++) {
            if (data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida]) {
                data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida] += purchase.product[i].quantity;
            }
            else {
                data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida] = purchase.product[i].quantity;
            }
        }
    }
    return getSortedHash(data);
}
async function getStockInfo(initial, final) {
    const initialDate = new Date(formatStringData(initial));
    const finalDate = new Date(formatStringData(final));
    const data = {};
    const clientes = await clienteRepository_1.default.getClients();
    for (const cliente of clientes) {
        const purchases = await purchaseRepository_1.default.getClientPurchasesByDate(cliente.id, initialDate, finalDate);
        for (const purchase of purchases) {
            const info = await purchaseRepository_1.default.getClientPurchases(purchase.id);
            purchase.product = info;
        }
        for (const purchase of purchases) {
            for (let i = 0; i < purchase.product.length; i++) {
                if (data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida]) {
                    data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida] += purchase.product[i].quantity;
                }
                else {
                    data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida] = purchase.product[i].quantity;
                }
            }
        }
    }
    return getSortedHash(data);
}
const purchaseServices = {
    insert,
    getPurchaseInfo,
    getPurchases,
    getPurchasesByDate,
    getTransactions,
    payment,
    getStockInfo
};
function calculateTotal(purchases) {
    let soma = 0;
    let soma2 = 0;
    if (purchases.valores.length === 0) {
        soma2 = 0;
    }
    else {
        purchases.valores.map(value => {
            soma2 += value;
        });
    }
    purchases.produtos.map(e => {
        soma += e.price * e.quantity;
    });
    return soma - soma2;
}
function formatStringData(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];
    return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
}
function getSortedHash(inputHash) {
    var resultHash = {};
    var keys = Object.keys(inputHash);
    keys.sort(function (a, b) {
        return inputHash[a] - inputHash[b];
    }).reverse().forEach(function (k) {
        resultHash[k] = inputHash[k];
    });
    return resultHash;
}
exports.default = purchaseServices;
