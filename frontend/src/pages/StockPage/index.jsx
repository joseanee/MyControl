import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../ClienteTransactions/style";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import axios from "axios";

export default function StockPage() {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [transactions, setTransactions] = useState();

  const navigate = useNavigate();

  function filterByDate(event) {
    event.preventDefault();

    const promise = axios.get(`${import.meta.env.VITE_URL}/relatorios?initial=${initialDate}&final=${finalDate}`);

    promise.then(res => {
      setTransactions(res.data);
    });
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
       <h1>Relatório de compras</h1>
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