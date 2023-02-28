import prisma from "../database";
import { ProductCreationDTO } from "../dtos/productDtos";

async function insert(data:ProductCreationDTO) {
  await prisma.produto.create({data});
};

async function getProducts() {
  return await prisma.produto.findMany();
};

async function getByName(name: string) {
  return await prisma.produto.findFirst({where:{nome:name}});
};

async function deleteProduct(id: number) {
  await prisma.produto.delete({where:{id}});
}

const productRepository = {
  insert,
  getProducts,
  getByName,
  deleteProduct
};

export default productRepository;