import { Router } from "express";
import { getPurchases, newPurchase } from "../controllers/purchaseController";

const pruchaseRouter = Router();

pruchaseRouter.post('/purchases/add', newPurchase);
pruchaseRouter.get('/clients/:id/purchases', getPurchases);

export default pruchaseRouter;