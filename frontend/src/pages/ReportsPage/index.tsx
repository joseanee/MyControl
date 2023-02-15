import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../context/UserContext";
import { Container, Purchase } from "./style";
import axios from "axios";

export default function ReportsPage() {
  const [info, setInfo] = useState();
  const [purchases, setPurchases] = useState();

  const { purchaseId } = useParams();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/clients/purchases/${purchaseId}`);

    promise.then(res => {
      setPurchases(res.data);
    });

    const promise2 = axios.get(`${import.meta.env.VITE_URL}/info`);

    promise2.then(res => {
      setInfo(res.data);
    })

  },[]);

  function renderProducts() {
    return purchases.produtos.map((produto, index) =>
       <Purchase key={index}>
          <div className="left">
            <h5>{produto.produto.nome}</h5>
            <h5 className="move">{produto.quantity} {produto.produto.medida}</h5>
            <h5 className="move">R$ {(produto.price).toFixed(2)}</h5>
            <h5 className="move">R$ {(produto.price * produto.quantity).toFixed(2)}</h5>
          </div>
       </Purchase>
    )
  }

  function renderInfo() {
    let result;

    for(let i = 0; i < purchases.valores.length;i++) {
      result += <Purchase key={i}>
      <div className="right">
        <h5>{purchases.formas[i]}</h5>
        <h5 className="detalhes">{purchase.detalhes[i]}</h5>
        <h5>R$ {purchase.valores[i].toFixed(2)}</h5>
      </div>
   </Purchase>
    }

    return result;
  }

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

    return [soma.toFixed(2),soma2.toFixed(2),(soma - soma2).toFixed(2)]
  }

  return(
    <Container>
      {info ? Header(info) : ""}
      <div className="organize">
        <h1>RELATÓRIO DE COMPRA</h1>
      </div>
      <div className="line"></div>
      <div className="organize">
        <h3>
          Fornecedor: {purchases ? purchases.fornecedor : ''}
        </h3>
        <h3>
          Data da compra: {purchases ? (new Date(purchases.data)).toLocaleDateString('pt-br') : ''}
        </h3>
      </div>
      <div className="line"></div>
      <div className="organize">
        <h4>
          DISCRIMINAÇÃO DE PRODUTOS
        </h4>
      </div>
      <div className="line"></div>
      <div className="info">
        <h4>Descrição do Produto</h4>
        <h4>Quantidade</h4>
        <h4>Preço Unitário</h4>
        <h4>Total</h4>
      </div>
      {
        purchases ? renderProducts() : ""
      }
      <div className="line"></div>
      <div className="organize">
        <h4>
          PAGAMENTOS LANÇADOS
        </h4>
      </div>
      <div className="line"></div>
      <div className="info sub">
        <h4>Forma</h4>
        <h4>Detalhes</h4>
        <h4>Valor pago</h4>
      </div>
      {
        purchases ? renderInfo() : ""
      }
      <div className="line"></div>
      <div className="footer">
        <h4>Quantia paga: R$ {purchases ? calculateTotal()[1] : ""}</h4>
        <div className="linefooter"></div>
        <h4>Valor total dos produtos: R$ {purchases ? calculateTotal()[0] : ""}</h4>
        <div className="linefooter"></div>
        <h4>Valor restante: R$ {purchases ? calculateTotal()[2] : ""}</h4>
        <div className="linefooter"></div>
      </div>
    </Container>
  )
}