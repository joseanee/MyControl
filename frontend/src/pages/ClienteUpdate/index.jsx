import { useEffect, useState } from "react";
import { Container } from "../ClienteRegister/style";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function ClienteUpdate() {
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [pix, setPix] = useState('');
  const [cpf, setCpf] = useState();
  const [cnpj, setCnpj] = useState();
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const promise = axios.get(`${import.meta.env.VITE_URL}/clients/${id}`);

    promise.then(res => {
      setName(res.data.name);
      setTelefone(res.data.telefone);
      setPix(res.data.pix);
      setCpf(res.data.cpf);
      setCnpj(res.data.cnpj);
      setRua(res.data.rua);
      setBairro(res.data.bairro);
      setCep(res.data.cep);
      setCidade(res.data.cidade);
      setEstado(res.data.estado);
    })
  },[])

  async function updateClient(event) {
    event.preventDefault();

    const body = {
      id,
      name,
      telefone,
      pix,
      cpf,
      cnpj,
      rua,
      bairro,
      cep,
      cidade,
      estado
    }

    try {
      await axios.put(`${import.meta.env.VITE_URL}/clients/update/${id}`,body);
      alert("Sucesso!");
      navigate('/clients');
    } catch (error) {
      alert("Falha ao atualizar dados do cliente!");
    }
  }

  return(
    <Container>
      <div className="voltar" onClick={() => navigate('/clients')}>
        <IoArrowBackCircleSharp color="crimson" size={60} />
      </div>
      <form onSubmit={updateClient}>
        <input type="text"
          value={name}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />
        <input type="text"
          value={telefone}
          placeholder="Telefone"
          onChange={e => setTelefone(e.target.value)}
        />
        <input type="text"
          value={pix}
          placeholder="PIX"
          onChange={e => setPix(e.target.value)}
        />
        <input type="text"
          value={cpf}
          placeholder="CPF"
          onChange={e => setCpf(e.target.value)}
        />
        <input type="text"
          value={cnpj}
          placeholder="CNPJ"
          onChange={e => setCnpj(e.target.value)}
        />
        <input type="text"
          value={rua}
          placeholder="Rua"
          onChange={e => setRua(e.target.value)}
        />
        <input type="text"
          value={bairro}
          placeholder="Bairro"
          onChange={e => setBairro(e.target.value)}
        />
        <input type="text"
          value={cep}
          placeholder="CEP"
          onChange={e => setCep(e.target.value)}
        />
        <input type="text"
          value={cidade}
          placeholder="Cidade"
          onChange={e => setCidade(e.target.value)}
        />
        <input type="text"
          value={estado}
          placeholder="Estado"
          onChange={e => setEstado(e.target.value)}
        />
        <button type="submit">
          Atualizar dados
        </button>
      </form>
    </Container>
  )
}