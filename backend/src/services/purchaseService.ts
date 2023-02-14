import { PurchaseRequest } from "../dtos/purchaseDtos";
import { ProductCreationDTO } from "../dtos/productDtos";
import productRepository from "../repositories/productRepository";
import clienteRepository from "../repositories/clienteRepository";
import purchaseRepository from "../repositories/purchaseRepository";
import { checkError } from "../middlewares/errorHandler";

async function insert(data: PurchaseRequest) {

  const productData:ProductCreationDTO = {
    nome:data.nome,
    medida:data.medida
  };

  const fornecedor = await clienteRepository.clientByName(data.fornecedor);

  if(!fornecedor) {
    throw checkError(404, "Fornecedor não registrado!")
  }

  await productRepository.insert(productData);

  const product = await productRepository.getByName(productData.nome);

  const purchaseData = {
    clientId: fornecedor.id,
    productId: product.id,
    forma: data.forma,
    detalhe: data.detalhe,
    valor: data.valor
  }

  await purchaseRepository.insert(purchaseData);

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