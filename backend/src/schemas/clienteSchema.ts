import joi from 'joi';

const clienteSchema = joi.object({
  name: joi.string().required(),
  telefone: joi.string().required(),
  pix: joi.string().required(),
  cpf: joi.string(),
  cnpj: joi.string(),
  rua: joi.string().required(),
  bairro: joi.string().required(),
  cep: joi.string().required(),
  cidade: joi.string().required(),
  estado: joi.string().required()
});

export default clienteSchema;