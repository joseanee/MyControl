import { ProductCreationDTO } from "../dtos/productDtos";
import productRepository from "../repositories/productRepository";

async function insert(data: ProductCreationDTO) {
  await productRepository.insert(data);
};

async function getProducts() {
  return await productRepository.getProducts();
};

const productServices = {
  insert,
  getProducts
};

export default productServices;