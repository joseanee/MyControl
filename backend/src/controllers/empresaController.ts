import { Request, Response } from "express";
import empresaServices from "../services/empresaServices";

export async function getInfo(req:Request, res:Response) {
  const info = await empresaServices.getData();
  return res.send(info);
}