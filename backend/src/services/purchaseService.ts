import { PurchaseRequest } from "../dtos/purchaseDtos";
import { ProductCreationDTO } from "../dtos/productDtos";
import productRepository from "../repositories/productRepository";
import clienteRepository from "../repositories/clienteRepository";
import purchaseRepository from "../repositories/purchaseRepository";
import { checkError } from "../middlewares/errorHandler";

async function insert(data: PurchaseRequest) {

  const productData:ProductCreationDTO = {
    nome:data.nome,
    medida:data.medida,
    preco:data.preco,
    quantidade:data.quantidade
  };

  const fornecedor = await clienteRepository.clientByName(data.fornecedor);

  if(!fornecedor) {
    throw checkError(404, "Fornecedor não registrado!")
  }

  await productRepository.insert(productData);

  const product = await productRepository.getByName(productData.nome);

  const purchaseData = {
    clientId: fornecedor.id,
    productId: product.id
  }

  await purchaseRepository.insert(purchaseData);

};

async function getPurchases(id:number) {
  return purchaseRepository.getClientPurchases(id);
};

const purchaseServices = {
  insert,
  getPurchases
};

export default purchaseServices;