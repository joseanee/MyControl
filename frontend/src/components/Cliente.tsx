import styled from "styled-components/macro";
import { Cliente } from "../entities/Cliente";

export default function Clientes(props:Cliente[]) {
  return(
    props.map(cliente => 
    <Container>
      <h1>Nome: {cliente.name}</h1>
      <h1>Fone: {cliente.telefone}</h1>
      <h1>PIX: {cliente.pix}</h1>
      {
        cliente.cpf ? <h1>CPF: {cliente.cpf}</h1> : ""
      }
      {
        cliente.cnpj ? <h1>CNPJ: {cliente.cnpj}</h1> : ""
      }
      <h1>Rua: {cliente.rua}</h1>
      <h1>Bairro: {cliente.bairro}</h1>
      <h1>CEP: {cliente.cep}</h1>
      <h1>{cliente.cidade}/{cliente.estado}</h1>
    </Container>)
  )
}

const Container = styled.div`
  border: solid 2px #000;
  width: 400px;
  height: 240px;
  background-color: #EBECF0;
  padding: 6px;
  margin: 4px;
  overflow-y: scroll;

  h1 {
    margin: 6px;
    font-size: 16px;
    word-wrap: break-word;
  }
`