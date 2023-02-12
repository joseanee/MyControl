import { Router } from "express";
import { newPurchase } from "../controllers/purchaseController";

const pruchaseRouter = Router();

pruchaseRouter.post('/purchases/add', newPurchase);
pruchaseRouter.get('/purchases/:id');

export default pruchaseRouter;