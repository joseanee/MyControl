import { useEffect, useState } from "react"
import axios from "axios";
import { Container } from "./style";
import Clientes from "../../components/Cliente";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function ClientesPage() {
  const [clients, setClients] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/clients`);

    promise.then(res => {
      console.log(res.data)
      setClients(res.data);
    })
  },[]);

  return(
    <Container>
      <h1 className="title">Clientes</h1>
      <div className="voltar" onClick={() => navigate('/')}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      {
        clients ? Clientes(clients) : <h1>Loading...</h1>
      }
    </Container>
  )
}