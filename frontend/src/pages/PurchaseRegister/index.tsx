import { Container } from "../ClienteRegister/style";
import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function PurchaseRegister() {
  const [nome, setNome] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [quantidade, setQuantidade] = useState();
  const [medida, setMedida] = useState('');
  const [preco, setPreco] = useState();

  const navigate = useNavigate();

  async function addPurchase(event:any) {
    event.preventDefault();

    const body = {
      fornecedor,
      nome,
      quantidade,
      medida,
      preco
    }

    try {
      await axios.post(`${import.meta.env.VITE_URL}/purchases/add`,body);
      alert("Compra registrada!");
      
      setNome('');
      setQuantidade();
      setMedida('');
      setPreco();

    } catch (error) {
      alert("Falha ao registrar compra!");
    }
  }

  return(
    <Container>
      <div className="voltar" onClick={() => navigate('/')}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      <form onSubmit={addPurchase}>
        <input type="text"
          value={fornecedor}
          placeholder="Fornecedor"
          onChange={e => setFornecedor(e.target.value)}
        />
        <input type="text"
          value={nome}
          placeholder="Nome do produto"
          onChange={e => setNome(e.target.value)}
        />
        <input type="number"
          value={quantidade}
          placeholder="Quantidade"
          onChange={e => setQuantidade(e.target.value)}
        />
        <input type="text"
          value={medida}
          placeholder="Kg, Un ou Pç"
          onChange={e => setMedida(e.target.value)}
        />
        <input type="number"
          step=".01"
          value={preco}
          placeholder="Preço"
          onChange={e => setPreco(e.target.value)}
        />
        <button type="submit">
          Cadastrar compra
        </button>
      </form>
    </Container>
  )
}