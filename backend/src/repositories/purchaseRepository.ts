import prisma from "../database";
import { PurchaseCreationDTO } from "../dtos/purchaseDtos";

async function insert(data:PurchaseCreationDTO) {
  await prisma.purchase.create({data});
};

async function getClientPurchases(clientId:number) {
  return await prisma.purchase.findMany({
    where:{
      clientId
    },
    select:{
      createdAt:true,
      forma:true,
      detalhe:true,
      valor:true
    }
  })
}

const purchaseRepository = {
  insert,
  getClientPurchases
};

export default purchaseRepository;