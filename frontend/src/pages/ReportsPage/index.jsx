// @ts-ignore
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
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
            <h5>{index + 1}</h5>
            <h5>{produto.produto?.nome}</h5>
            <h5 className="move">{produto.quantity} {produto.produto.medida}</h5>
            <h5 className="move">{(produto.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
            <h5 className="move">{(produto.price * produto?.quantity).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
          </div>
       </Purchase>
    )
  }

  function renderInfo() {
    let result = [];

    for(let i = 0; i < purchases.valores.length;i++) {
      result.push(<Purchase key={i}>
      <div className="right">
        <h5>{purchases.formas[i]}</h5>
        <h5 className="detalhes">{purchases.detalhes[i]}</h5>
        <h5>{purchases.valores[i].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
      </div>
   </Purchase>)
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

    return [soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
    soma2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
    (soma - soma2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})];
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
        <h4>Enumeração</h4>
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
        <h4>Quantia paga: {purchases ? calculateTotal()[1] : ""}</h4>
        <div className="linefooter"></div>
        <h4>Valor total dos produtos: {purchases ? calculateTotal()[0] : ""}</h4>
        <div className="linefooter"></div>
        <h4>Valor restante: {purchases ? calculateTotal()[2] : ""}</h4>
        <div className="linefooter"></div>
      </div>
    </Container>
  )
}