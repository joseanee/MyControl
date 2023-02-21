import { useContext, useEffect, useState } from "react";
import { Container, Content } from "./style";
import axios from 'axios';
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function InitialPage() {
  const [empresa, setEmpresa] = useState();

  const navigate = useNavigate();
  const { setInfo }:any = useContext(UserContext);

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/info`);

    promise.then(res => {
      console.log(res.data)
      setInfo(res.data);
      setEmpresa(res.data);
    })
    
  },[]);
  
  return(
    <Container>
     {
      empresa ? Header(empresa)
      : 
      <h1>Loading...</h1>
     }
     {
      empresa ? 
      <Content>
        <div className="clientes">
          <button onClick={() => navigate('/clients')}>
            Listar Clientes
          </button>
          <button onClick={() => navigate('/client/add')}>
            Cadastrar Cliente
          </button>
        </div>
        <div className="produtos">
          <button onClick={() => navigate('/products')}>
            Listar Produtos
          </button>
          <button onClick={() => navigate('/products/add')}>
            Cadastrar Produtos
          </button>
        </div>
        <div className="relatorios">
          <button onClick={() => navigate('/relatorios')}>
            Relatório de Compras
          </button>
        </div>
      </Content>
      : 
      ''
     }
    </Container>
  );
};