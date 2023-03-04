import prisma from "../database";

async function getInfo() {
  return await prisma.empresa.findFirst();
};

const empresaRepository = {
  getInfo
};

export default empresaRepository;