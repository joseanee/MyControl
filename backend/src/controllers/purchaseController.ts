import { Request, Response } from "express";
import purchaseServices from "../services/purchaseService";

export async function newPurchase(req:Request, res:Response) {
  const id = Number(req.params.id);

  await purchaseServices.insert(req.body, id);

  return res.status(201).send("Compra registrada!");
};

export async function getPurchases(req:Request, res:Response) {
  const id = Number(req.params.id);

  const purchases = await purchaseServices.getPurchases(id);

  return res.status(200).send(purchases);
};

export async function getPurchaseInfo(req:Request, res:Response) {
  const id = Number(req.params.id);

  const purchases = await purchaseServices.getPurchaseInfo(id);

  return res.status(200).send(purchases);
};