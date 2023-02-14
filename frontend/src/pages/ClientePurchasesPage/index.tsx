import { useEffect, useState } from "react"
import axios from "axios";
import { Container } from "../ClientesPage/style";
import Purchases from "../../components/Purchase";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function ClientePurchasesPage() {
  const [purchases, setPurchases] = useState();
  const [purchase, setPurchase] = useState({});
  const [changeState, setChangeState] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/purchases`);

    promise.then(res => {
      setPurchase({});
      setPurchases(res.data);
    })
    
  },[changeState]);

  return(
    <Container>
      <div className="title">
        <h1>Compras do Cliente</h1>
        <button onClick={() => navigate(`/purchases/${id}`)}>Nova Compra</button>
      </div>
      <div className="voltar" onClick={() => navigate('/')}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      {
        purchases && Object.keys(purchase).length === 0 ? Purchases(purchases, setChangeState, changeState) : ""
      }
      {
        Object.keys(purchase).length !== 0 ? Purchases(purchase, setChangeState, changeState) : ""
      }
    </Container>
  )
}