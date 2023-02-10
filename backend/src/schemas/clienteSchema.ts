import joi from 'joi';

const clienteSchema = joi.object({
  name: joi.string().required(),
  telefone: joi.string().required(),
  pix: joi.string().required(),
  cpf: joi.string(),
  cnpj: joi.string()
});

export default clienteSchema;