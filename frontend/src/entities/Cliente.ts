export interface Cliente {
  id: number,
  name: String,
  telefone: String,
  pix: String,
  cpf?: String,
  cnpj?: String,
  rua: String,
  bairro: String,
  cep: String,
  cidade: String,
  estado: String
}