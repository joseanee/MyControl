import prisma from "../database";
import { ProductCreationDTO } from "../dtos/productDtos";

async function insert(data:ProductCreationDTO) {
  await prisma.produto.create({data});
};

async function getProducts() {
  return await prisma.produto.findMany();
};

const productRepository = {
  insert,
  getProducts
};

export default productRepository;