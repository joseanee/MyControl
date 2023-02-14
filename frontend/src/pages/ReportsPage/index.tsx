import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../context/UserContext";
import { Container, Purchase } from "./style";
import axios from "axios";

export default function ReportsPage() {
  const { info }:any = useContext(UserContext);
  const [purchases, setPurchases] = useState();

  const { id } = useParams();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/clients/${id}/purchases`);

    promise.then(res => {
      setPurchases(res.data);
    });

  },[]);

  function renderProducts() {
    return purchases[1].map((purchase, index) =>
       <Purchase key={index}>
          <div className="left">
            <h5>{purchase.produto.nome}</h5>
            <h5 className="move">{(new Date(purchase.createdAt)).toLocaleDateString('pt-br')}</h5>
            <h5 className="move">{purchase.produto.quantidade} {purchase.produto.medida}</h5>
            <h5 className="move">R$ {(purchase.produto.preco).toFixed(2)}</h5>
            <h5 className="move">R$ {(purchase.produto.preco * purchase.produto.quantidade).toFixed(2)}</h5>
            <h5 className="move">R$ {(purchase.valor).toFixed(2)}</h5>
            <h5 className="move">R$ {(purchase.produto.preco * purchase.produto.quantidade - purchase.valor).toFixed(2)}</h5>
          </div>
       </Purchase>
    )
  }

  function renderInfo() {
    return purchases[1].map((purchase, index) =>
       <Purchase key={index}>
          <div className="right">
            <h5>{purchase.forma}</h5>
            <h5 className="detalhes">{purchase.detalhe}</h5>
            <h5>R$ {purchase.valor.toFixed(2)}</h5>
          </div>
       </Purchase>
    )
  }

  function calculateTotal() {
    let soma = 0;
    let soma2 = 0;

    purchases[1].map(e => {
      soma += e.produto.preco * e.produto.quantidade;
      soma2 += e.valor;
    });

    return [soma.toFixed(2),soma2.toFixed(2),(soma - soma2).toFixed(2)]
  }

  return(
    <Container>
      {Header(info)}
      <div className="organize">
        <h1>RELATÓRIO DE COMPRA</h1>
      </div>
      <div className="line"></div>
      <div className="organize">
        <h3>
          Fornecedor: {purchases ? purchases[0] : ''}
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
        <h4>Data da compra</h4>
        <h4>Quantidade</h4>
        <h4>Preço Unitário</h4>
        <h4>Total</h4>
        <h4>Valor pago</h4>
        <h4>Restante</h4>
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