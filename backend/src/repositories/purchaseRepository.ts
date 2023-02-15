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
};

async function getPurchasesByClientId(clientId:number) {
  return prisma.purchase.findMany({where:{clientId},orderBy:{id:'desc'}})
};

async function getPurchaseById(id:number) {
  return prisma.purchase.findFirst({where:{id}});
}

async function getClientPurchases(purchaseId:number) {
  return await prisma.purchaseProduct.findMany({
    where:{
      purchaseId
    },
    select:{
      id:true,
      price:true,
      quantity:true,
      produto:{}
    }
  })
}

const purchaseRepository = {
  insert,
  getClientPurchases,
  getPurchaseByClientId,
  getPurchasesByClientId,
  getPurchaseById,
  registerBoughtProduct
};

export default purchaseRepository;