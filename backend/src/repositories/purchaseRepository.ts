import prisma from "../database";
import { PurchaseCreationDTO, PurchaseData } from "../dtos/purchaseDtos";

async function insert(data:PurchaseCreationDTO) {
  await prisma.purchase.create({data});
};

async function registerBoughtProduct(data:PurchaseData) {
  await prisma.purchaseProduct.create({data})
}

async function getPurchaseByClientId(clientId:number) {
  return prisma.purchase.findFirst({where:{clientId},orderBy:{id:'desc'}})
}

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
  getClientPurchases,
  getPurchaseByClientId,
  registerBoughtProduct
};

export default purchaseRepository;