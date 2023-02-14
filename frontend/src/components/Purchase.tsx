import { Container } from "./Product";
import { IoEye } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
import { Purchase } from "../entities/Purchase";

export default function Purchases(props:Purchase[], setChangeState:any, changeState:number) {

  return(
    props.map((purchase, index) => 
    <Container key={index}>
      <h1>Nome: {purchase.data}</h1>
      <div className="options">
        <Link to={`/clients/update/${purchase.id}`}>
          <IoEye color="purple" size={20} cursor="pointer" />
        </Link>
      </div>
    </Container>)
  )
}