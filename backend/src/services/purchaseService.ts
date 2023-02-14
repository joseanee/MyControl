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
  const purchases = await purchaseRepository.getClientPurchases(id);
  const cliente = await clienteRepository.clientById(id);

  return [cliente.name, purchases];
};

const purchaseServices = {
  insert,
  getPurchases
};

export default purchaseServices;