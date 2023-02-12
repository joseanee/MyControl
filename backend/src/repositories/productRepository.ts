import prisma from "../database";
import { ProductCreationDTO } from "../dtos/productDtos";

async function insert(data:ProductCreationDTO) {
  await prisma.produto.create({data});
};

async function getProducts() {
  return await prisma.produto.findMany();
};

async function getByName(name: string) {
  return await prisma.produto.findFirst({where:{nome:name},orderBy:{id:'desc'}});
}

const productRepository = {
  insert,
  getProducts,
  getByName
};

export default productRepository;