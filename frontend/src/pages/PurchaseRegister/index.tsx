import { Container } from "./style";
import { useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function PurchaseRegister() {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  async function addPurchase(event:any) {
    event.preventDefault();

    const body = items;

    try {
      await axios.post(`${import.meta.env.VITE_URL}/purchases/${id}/add`,body);
      alert("Compra registrada!");
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/products`);

    promise.then(res => {
      setProducts(res.data);
    })
    
  },[]);

  function renderProducts() {
    return products.map((product,index) => 
        <label key={index}>
          <input
            type="checkbox"
            value={product.nome}
            onChange={handleCheckboxChange}
          />
          {product.nome}
        </label>
      )
  }

  const handleCheckboxChange = (event) => {
    const name = event.target.value;
    if (event.target.checked) {
      setItems([...items, { name: name, price: "", quantity: "" }]);
    } else {
      setItems(items.filter((item) => item.name !== name));
    }
  };

  const handleItemChange = (index, name, value) => {
    const list = [...items];
    list[index][name] = value;
    setItems(list);
  };

  return(
    <Container>
      <div className="voltar" onClick={() => navigate('/')}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      <form onSubmit={addPurchase}>
        <div className="opcoes">
          {products.length > 0 ? renderProducts() : ""}
        </div>
        {items.map((item, index) => (
      <div key={index}>
        <label className="fields">
          {item.name} price:
          <input
            type="text"
            value={item.price}
            onChange={(event) =>
              handleItemChange(index, "price", event.target.value)
            }
          />
        </label>
        <label className="fields"> 
          {item.name} quantity:
          <input
            type="text"
            value={item.quantity}
            onChange={(event) =>
              handleItemChange(index, "quantity", event.target.value)
            }
          />
        </label>
      </div>
    ))}
    <button type="submit">Finalizar Compra</button>
      </form>
    </Container>
  )
}