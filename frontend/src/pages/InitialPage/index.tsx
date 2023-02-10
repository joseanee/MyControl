import { useEffect, useState } from "react";
import { Container, Content } from "./style";
import axios from 'axios';
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function InitialPage() {
  const [empresa, setEmpresa] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/info`);

    promise.then(res => {
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
          <button>
            Listar Clientes
          </button>
          <button onClick={() => navigate('/client/add')}>
            Cadastrar Cliente
          </button>
        </div>
      </Content>
      : 
      ''
     }
    </Container>
  );
};