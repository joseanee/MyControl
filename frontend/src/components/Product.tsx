import styled from "styled-components/macro";
import { Produto } from "../entities/Product";
import { IoBrush, IoClose } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Produtos(props:Produto[], setChangeState:any, changeState:number) {

  async function deleteProduto(id:number) {
    try {
      await axios.delete(`${import.meta.env.VITE_URL}/produtos/delete/${id}`);
      setChangeState(changeState + 1);
      alert("Removido com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  return(
    props.map((produto, index) => 
    <Container key={index}>
      <h1>Nome: {produto.nome}</h1>
      <h1>Quantidade: {produto.quantidade} {produto.medida}</h1>
      <h1>Preço por {produto.medida}: R$ {(produto.preco).toFixed(2)}</h1>
      <h1>Total: R$ {(produto.preco * produto.quantidade).toFixed(2)}</h1>
      <div className="options">
        <Link to={`/clients/update/${produto.id}`}>
          <IoBrush color="purple" size={20} cursor="pointer" />
        </Link>
        <IoClose color="red" size={20} cursor="pointer" onClick={() => deleteProduto(produto.id)}/>
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

    height: 60px;

    justify-content: space-around;
  }
`