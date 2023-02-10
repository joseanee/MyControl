import styled from "styled-components/macro";
import { Empresa } from "../entities/Empresa";

export default function Header(props:Empresa) {
  return(
    <Container>
      <div className="left">
        <img src="https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg" alt="logo" />
        <div className="left2">
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
        </div>
      </div>
      <div className="right">
          <h2>{props.rua}</h2>
          <h2>Bairro: {props.bairro} - CEP: {props.cep}</h2>
          <h2>{props.cidade}/{props.estado}</h2>
          <h2>Fone: {props.telefone} - CNPJ: {props.cnpj}</h2>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 20vh;
  width: 100%;
  border: solid 2px #000000;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  .left, .left2 {
    display: flex;
  }

  .left2 {
    flex-direction: column;
    justify-content: space-around;
    height: 80px;
    margin-left: 12px;

    h1 {
      font-weight: bolder;
    }
  }

  .right {
    h2 {
      margin-bottom: 8px;
    }
  }
`