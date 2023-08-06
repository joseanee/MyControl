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
  const { name }= req.query;

  if(name) {
    const products = await productServices.getProductsWithFilter(name.toString());

    return res.status(200).send(products);
  }

  const products = await productServices.getProducts();

  return res.status(200).send(products);
}

export async function removeProduct(req:Request, res:Response) {
  const id = Number(req.params.id);

  await productServices.remove(id);

  return res.status(200).send('ok');
}

export async function getProductById(req:Request, res:Response) {
  const id = Number(req.params.id);

  const product = await productServices.findById(id);

  return res.status(200).send(product);
}

export async function updateProduct(req:Request, res:Response) {
  const data = req.body;

  const product = await productServices.update(data);

  return res.status(200).send(product);
}