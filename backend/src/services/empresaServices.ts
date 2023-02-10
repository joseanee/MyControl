import empresaRepository from "../repositories/empresaRepository";

async function getData() {
  return await empresaRepository.getInfo();
};

const empresaServices = {
  getData
};

export default empresaServices;