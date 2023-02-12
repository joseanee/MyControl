import { useContext } from "react";
import Header from "../../components/Header";
import UserContext from "../../context/UserContext";
import { Container } from "./style";

export default function ClientePurchasesPage() {
  const { info }:any = useContext(UserContext);

  return(
    <Container>
      {Header(info)}
      <h1>RELATÓRIO DE COMPRA</h1>
      <div className="line"></div>
    </Container>
  )
}