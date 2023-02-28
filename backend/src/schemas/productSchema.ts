import joi from 'joi';

const productSchema = joi.object({
  nome: joi.string().required(),
  medida: joi.string().required()
});

export default productSchema;