import { Container } from "./style";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ClienteTransactions() {

  const [cliente, setCliente] = useState();
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [transactions, setTransactions] = useState();
 
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/clients/${id}`);

    promise.then(res => {
      setCliente(res.data);
    })
  },[])

  function filterByDate(event) {
    event.preventDefault();

    const promise = axios.get(`${import.meta.env.VITE_URL}/clients/${id}/transactions?initial=${initialDate}&final=${finalDate}`);

    promise.then(res => {
      console.log(res.data)
      setTransactions(res.data);
    })
  }

  function renderTransactions() {
    const arr = [];
    for(const transaction in transactions) {
      arr.push(
    <div className="transaction">
      <h2>{transaction} - {transactions[transaction]}</h2>
    </div>)
    }
    
    return arr
  }

  return(
   <Container>
    <div className="voltar" onClick={() => navigate(-1)}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
    </div>
    <header>
      <h1>Fornecedor: {cliente ? cliente.name : ""}</h1>
      <form onSubmit={filterByDate}>
          <input 
            type="text"
            placeholder="Data inicial dd/mm/yyyy"
            value={initialDate}
            required={true}
            onChange={e => setInitialDate(e.target.value)}
          />
          <input 
            type="text"
            placeholder="Data final dd/mm/yyyy"
            value={finalDate}
            required={true}
            onChange={e => setFinalDate(e.target.value)}
          />
          <button type="submit">Filtrar</button>
        </form>
    </header>
    <div className="transactions">
      {
        transactions ? renderTransactions() : ""
      }
    </div>
   </Container>
  )
}