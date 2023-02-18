import styled from "styled-components/macro";
import { IoBrush, IoClose, IoEye } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Clientes(props, setChangeState, changeState) {

  async function deleteCliente(id) {
    try {
      await axios.delete(`${import.meta.env.VITE_URL}/clients/delete/${id}`);
      setChangeState(changeState + 1);
      alert("Removido com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  return(
    props.map((cliente, index) => 
    <Container key={index}>
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
      <div className="options">
        <Link to={`/clients/${cliente.id}/purchases`}>
          <IoEye color="green" size={26} cursor="pointer"/>
        </Link>
        <Link to={`/clients/update/${cliente.id}`}>
          <IoBrush color="purple" size={26} cursor="pointer" />
        </Link>
        <IoClose color="red" size={26} cursor="pointer" onClick={() => deleteCliente(cliente.id)}/>
      </div>
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

  position: relative;

  h1 {
    margin: 6px;
    font-size: 16px;
    word-wrap: break-word;
  }

  .options {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 8px;
    right: 8px;

    height: 80px;

    justify-content: space-around;
  }
`