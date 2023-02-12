import { Request, Response } from "express";
import { PurchaseRequest } from "../dtos/purchaseDtos";
import purchaseServices from "../services/purchaseService";

export async function newPurchase(req:Request, res:Response) {

  const data:PurchaseRequest = {
    fornecedor: req.body.fornecedor,
    nome: req.body.nome,
    medida: req.body.medida,
    quantidade: Number(req.body.quantidade),
    preco: Number(req.body.preco)
  }
  
  await purchaseServices.insert(data);

  return res.status(201).send("Compra registrada!");
};

export async function getPurchases(req:Request, res:Response) {
  const id = Number(req.params.id);

  const purchases = await purchaseServices.getPurchases(id);

  return res.status(200).send(purchases);
};
