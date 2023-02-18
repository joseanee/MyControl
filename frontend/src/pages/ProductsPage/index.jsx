import { useEffect, useState } from "react"
import axios from "axios";
import { Container } from "../ClientesPage/style";
import Produtos from "../../components/Product";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function ProductsPage() {
  const [products, setProducts] = useState();
  const [product, setProduct] = useState({});
  const [nome, setNome] = useState('');
  const [changeState, setChangeState] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/products`);

    promise.then(res => {
      setProduct({});
      setProducts(res.data);
    })
    
  },[changeState]);

  async function findByName(event) {
    event.preventDefault();

    try {
      if(!nome) {
        setChangeState(changeState + 1);
        return;
      }

      const { data:client } = await axios.get(`${import.meta.env.VITE_URL}/products?name=${nome}`);
      console.log(client)
      const arr = [];

      arr.push(client);

      setProduct(arr);
    } catch (error) {
      alert(error);
    }
  }

  return(
    <Container>
      <div className="title">
        <h1>Produtos</h1>
        <form onSubmit={findByName}>
          <input type="text"
            placeholder="Procurar"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </form>
      </div>
      <div className="voltar" onClick={() => navigate('/')}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      {
        products && Object.keys(product).length === 0 ? Produtos(products, setChangeState, changeState) : ""
      }
      {
        Object.keys(product).length !== 0 ? Produtos(product) : ""
      }
    </Container>
  )
}