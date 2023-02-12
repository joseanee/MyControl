import { Purchase } from "@prisma/client";

export type PurchaseCreationDTO = Omit<Purchase, "id" | "createdAt">;

export type PurchaseRequest = {
  fornecedor:string,
  nome:string,
  quantidade:number,
  medida:string,
  preco:number
}