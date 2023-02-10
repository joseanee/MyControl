import { Request, Response } from "express";
import clienteServices from "../services/clienteServices";

export async function newClient(req:Request, res:Response) {

  await clienteServices.register(req.body);

  return res.status(201).send("Registrado!");
};

export async function getClients(req:Request, res:Response) {

  const clients = await clienteServices.findAll();

  return res.status(200).send(clients);
};