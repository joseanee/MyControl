import { Purchase } from "@prisma/client";

export type PurchaseCreationDTO = Omit<Purchase, "id" | "createdAt" | "forma" | "detalhe" | "valor">;

export type PurchaseRequest = {
  name: string,
  price: number,
  quantity: number,
}

export type PurchaseData = {
  productId: number,
  purchaseId: number,
  price: number,
  quantity: number
}