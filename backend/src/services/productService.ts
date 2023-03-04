import { Produto } from "@prisma/client";
import { ProductCreationDTO } from "../dtos/productDtos";
import productRepository from "../repositories/productRepository";

async function insert(data: ProductCreationDTO) {
  await productRepository.insert(data);
};

async function getProduct(name: string) {
  return await productRepository.getByName(name);
};

async function findById(id: number) {
  return await productRepository.getById(id);
}

async function getProducts() {
  const products = await productRepository.getProducts();

  return products;
};

async function remove(id: number) {
  await productRepository.deleteProduct(id);
};

async function update(data: any) {
  await productRepository.updateProduct(data);
};

async function getProductsWithFilter(name: string) {
  return await productRepository.filterByName(name);
}

const productServices = {
  insert,
  getProduct,
  getProducts,
  findById,
  remove,
  update,
  getProductsWithFilter
};

export default productServices;