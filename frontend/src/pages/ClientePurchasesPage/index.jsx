import { useEffect, useState } from "react"
import axios from "axios";
import { Container } from "./style";
import Purchases from "../../components/Purchase";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function ClientePurchasesPage() {
  const [purchases, setPurchases] = useState();
  const [purchase, setPurchase] = useState({});
  const [changeState, setChangeState] = useState(0);
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/clients/${id}/purchases`);

    promise.then(res => {
      setPurchase({});
      setPurchases(res.data);
    })
    
  },[changeState]);

  function filterByDate(event) {
    event.preventDefault();

    const promise = axios.get(`${import.meta.env.VITE_URL}/clients/${id}/purchases?initial=${initialDate}&final=${finalDate}`);

    promise.then(res => {
      setPurchase({});
      setPurchases(res.data);
    })
  }

  return(
    <Container>
      <div className="title">
        <h1>Compras do Cliente</h1>
        <button onClick={() => navigate(`/clients/${id}/transactions`)}>Transações</button>
        <button onClick={() => navigate(`/purchases/${id}`)}>Nova Compra</button>
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
      </div>
      <div className="voltar" onClick={() => navigate(-1)}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      {
        purchases && Object.keys(purchase).length === 0 ? Purchases(purchases, setChangeState, changeState) : ""
      }
      {
        Object.keys(purchase).length !== 0 ? Purchases(purchase) : ""
      }
    </Container>
  )
}