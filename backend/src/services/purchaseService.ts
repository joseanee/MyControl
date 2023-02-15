import { PurchaseRequest } from "../dtos/purchaseDtos";
import { PurchaseCreationDTO } from "../dtos/purchaseDtos";
import productRepository from "../repositories/productRepository";
import clienteRepository from "../repositories/clienteRepository";
import purchaseRepository from "../repositories/purchaseRepository";

async function insert(data: PurchaseRequest[], id:number) {

  const clientData:PurchaseCreationDTO = {
    clientId:id
  };

  await purchaseRepository.insert(clientData);

  for(const product of data) {
    const productId = (await productRepository.getByName(product.name)).id;
    const purchaseId = (await purchaseRepository.getPurchaseByClientId(id)).id;

    const registerData = {
      productId,
      purchaseId,
      price: Number(product.price),
      quantity: Number(product.quantity)
    }

    await purchaseRepository.registerBoughtProduct(registerData);
  }
};

async function getPurchases(id:number) {
  return await purchaseRepository.getPurchasesByClientId(id);
}

async function getPurchaseInfo(id:number) {
  const purchase = await purchaseRepository.getPurchaseById(id);
  const cliente = await clienteRepository.clientById(purchase.clientId);
  const purchases = await purchaseRepository.getClientPurchases(id);

  const data = {
    fornecedor: cliente.name,
    data: purchase.createdAt,
    formas: purchase.forma,
    detalhes: purchase.detalhe,
    valores: purchase.valor,
    wasPaid: purchase.wasPaid,
    produtos: purchases
  }

  return data;
};

const purchaseServices = {
  insert,
  getPurchaseInfo,
  getPurchases
};

export default purchaseServices;