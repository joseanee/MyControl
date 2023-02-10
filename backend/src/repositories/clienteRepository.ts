import prisma from '../database';
import { ClienteCreationDTO } from '../dtos/clienteDtos';

async function insert(data:ClienteCreationDTO) {
  await prisma.cliente.create({data});
};

async function getClients() {
  return await prisma.cliente.findMany();
}

const clienteRepository = {
  insert,
  getClients
};

export default clienteRepository;