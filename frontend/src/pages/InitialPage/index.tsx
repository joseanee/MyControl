import { useEffect, useState } from "react";
import { Container } from "./style";
import axios from 'axios';
import Header from "../../components/Header";

export default function InitialPage() {
  const [empresa, setEmpresa] = useState();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/info`);

    promise.then(res => {
      console.log(res.data);
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
    </Container>
  );
};