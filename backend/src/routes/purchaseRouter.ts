import { Router } from "express";
import { getPurchaseInfo, getPurchases, newPurchase } from "../controllers/purchaseController";

const pruchaseRouter = Router();

pruchaseRouter.post('/purchases/:id/add', newPurchase);
pruchaseRouter.get('/clients/:id/purchases', getPurchases);
pruchaseRouter.get('/clients/purchases/:id', getPurchaseInfo);

export default pruchaseRouter;