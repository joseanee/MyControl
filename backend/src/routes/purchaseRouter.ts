import { Router } from "express";
import { getPurchaseInfo, getPurchases, newPurchase, addPayment, getTransactions, getStock, removePurchase } from "../controllers/purchaseController";

const purchaseRouter = Router();

purchaseRouter.post('/purchases/:id/add', newPurchase);
purchaseRouter.put('/purchases/:id/update', addPayment);
purchaseRouter.get('/clients/:id/purchases', getPurchases);
purchaseRouter.get('/clients/purchases/:id', getPurchaseInfo);
purchaseRouter.get('/clients/:id/transactions', getTransactions);
purchaseRouter.get('/relatorios', getStock);
purchaseRouter.delete('/purchases/:id/delete', removePurchase);

export default purchaseRouter;