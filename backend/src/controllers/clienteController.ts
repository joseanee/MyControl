import { Request, Response } from "express";
import clienteServices from "../services/clienteServices";

export async function newClient(req:Request, res:Response) {

  await clienteServices.register(req.body);

  return res.status(201).send("Registrado!");
};