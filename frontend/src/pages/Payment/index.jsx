import { Container } from "../ClienteRegister/style";
import { useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function Payment() {
  const [forma, setForma] = useState('');
  const [detalhe, setDetalhe] = useState('');
  const [valor, setValor] = useState(0);
  const [purchases, setPurchases] = useState();

  const navigate = useNavigate();

  const { purchaseId } = useParams();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/clients/purchases/${purchaseId}`);

    promise.then(res => {
      setPurchases(res.data);
    });
  },[]);

  function calculateTotal() {
    let soma = 0;
    let soma2 = 0;

    if(purchases.valores.length === 0) {
      soma2 = 0;
    }else {
      purchases.valores.map(value => {
        soma2 += value;
      })
    }

    purchases.produtos.map(e => {
      soma += e.price * e.quantity;
    });

    return (soma - soma2).toFixed(2);
  }

  async function pay(event) {
    event.preventDefault();

    const body = {
      forma,
      detalhe,
      valor
    }

    try {
      await axios.put(`${import.meta.env.VITE_URL}/purchases/${purchaseId}/update`,body);
      alert("Pagamento registrado!!");
    } catch (error) {
      alert("Falha ao registrar pagamento!");
    }
  }

  return(
    <Container>
      <div className="voltar" onClick={() => navigate(-1)}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      <h1>Valor desta conta: R$ {purchases ? calculateTotal() : ""}</h1>
      <form onSubmit={pay}>
        <input type="text"
          value={forma}
          placeholder="Forma de pagamento"
          onChange={e => setForma(e.target.value)}
        />
        <input type="text"
          value={detalhe}
          placeholder="Detalhes da transação"
          onChange={e => setDetalhe(e.target.value)}
        />
        <input type="number"
          value={valor}
          placeholder="Quantia"
          onChange={e => setValor(e.target.value)}
        />
        <button type="submit">
          Efetuar Pagamento
        </button>
      </form>
    </Container>
  )
}