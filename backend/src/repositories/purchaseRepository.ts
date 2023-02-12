import prisma from "../database";
import { PurchaseCreationDTO } from "../dtos/purchaseDtos";

async function insert(data:PurchaseCreationDTO) {
  await prisma.purchase.create({data});
};

const purchaseRepository = {
  insert
};

export default purchaseRepository;