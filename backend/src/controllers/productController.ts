import { Request, Response } from "express";
import { ProductCreationDTO } from "../dtos/productDtos";
import productServices from "../services/productService";

export async function newProduct(req:Request, res:Response) {

  const product:ProductCreationDTO = {
    nome: req.body.nome,
    medida: req.body.medida
  };
  
  await productServices.insert(product);

  return res.status(201).send("Produto registrado!");
};

export async function getProducts(req:Request, res:Response) {
  const products = await productServices.getProducts();

  return res.status(200).send(products);
}