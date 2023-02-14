import { Purchase } from "@prisma/client";

export type PurchaseCreationDTO = Omit<Purchase, "id" | "createdAt">;

export type PurchaseRequest = {
  fornecedor:string,
  nome:string,
  medida:string,
  forma: string,
  detalhe: string,
  valor: number
}