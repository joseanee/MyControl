import joi from 'joi';

const productSchema = joi.object({
  nome: joi.string().required(),
  quantidade: joi.number().required(),
  medida: joi.string().required(),
  preco: joi.number().required()
});

export default productSchema;