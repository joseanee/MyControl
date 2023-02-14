import { Container } from "../ClienteRegister/style";
import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ProductRegister() {
  const [nome, setNome] = useState('');
  const [medida, setMedida] = useState('');

  const navigate = useNavigate();

  async function addProduct(event:any) {
    event.preventDefault();

    const body = {
      nome,
      medida
    }

    try {
      await axios.post(`${import.meta.env.VITE_URL}/products/add`,body);
      alert("Produto registrado!");
      navigate('/');
    } catch (error) {
      alert("Falha ao registrar produto!");
    }
  }

  return(
    <Container>
      <div className="voltar" onClick={() => navigate('/')}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      <form onSubmit={addProduct}>
        <input type="text"
          value={nome}
          placeholder="Nome"
          onChange={e => setNome(e.target.value)}
        />
        <input type="text"
          value={medida}
          placeholder="Kg, Un ou Pç"
          onChange={e => setMedida(e.target.value)}
        />
        <button type="submit">
          Cadastrar Produto
        </button>
      </form>
    </Container>
  )
}