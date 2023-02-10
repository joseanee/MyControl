import { ClienteCreationDTO } from "../dtos/clienteDtos";
import { checkError } from "../middlewares/errorHandler";
import clienteRepository from "../repositories/clienteRepository";

async function register(data:ClienteCreationDTO) {
  try {
    await clienteRepository.insert(data);
  } catch (error) {
    console.log(error);
    throw checkError(409,"registration failed");
  }
};

const clienteServices = {
  register
};

export default clienteServices;