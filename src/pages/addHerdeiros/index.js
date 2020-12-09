import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, NavLinks, Content
} from './styles';

import Sidebar from '../../components/sidebar';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function NewHerdeiros() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [relationship, setRelationship] = useState('');

  async function addHerdeiro(e) {
    e.preventDefault();

    const data = {
      fullname: fullname,
      email: email,
      cellphone: cellphone,
      relationship: relationship
    }

    api.post('/heirs', data);

    toast.success('Novo herdeiro cadastrado');

    setRelationship('');
    setEmail('');
    setFullname('');
    setCellphone('');
  }

  console.log(relationship);

  function handleTelefone(event) {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    var str = event.target.value.replace(/[^0-9]/g, "").slice(0, 11);

    const result = str.replace(regex, "($1)$2-$3");

    setCellphone(result);
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Configurações</h1>
        <NavLinks>
          <ul>
            <li>
              <Link to="/profile/configuracoes">Editar Perfil</Link>
            </li>
            <li>
              <Link to="/profile/configuracoes/senha">Alterar Senha</Link>
            </li>
            <li>
              <Link to="/profile/configuracoes/herdeiros">Gerenciar Herdeiros</Link>
            </li>
            <li>
              <Link to="/profile/configuracoes/conta">Conta</Link>
            </li>
          </ul>
        </NavLinks>
        <div className="content-form">
          <div className="form">
            <section>
              <label>Nome completo</label>
              <input name="name" value={fullname} onChange={e => setFullname(e.target.value)} />
              <label>Email</label>
              <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
              <label>Telefone</label>
              <input type="text" value={cellphone} onChange={handleTelefone.bind(this)} />
            </section>
            <section>
              <label>Parentesco/Vínculo</label>
              <div className="div-select">
                <select name="relationships" id="relationships" onChange={e => setRelationship(e.target.value)} >
                  <option>Selecione</option>
                  <option value="MARIDO">Marido</option>
                  <option value="ESPOSA">Esposa</option>
                  <option value="FILHO">Filho</option>
                  <option value="FILHA">Filha</option>
                  <option value="IRMAO">Irmão</option>
                  <option value="IRMA">Irmã</option>
                  <option value="OUTRO">Outro</option>
                </select>
              </div>
            </section>
          </div>
          <div className="button">
            <button type="submit" onClick={addHerdeiro}>Salvar</button>
            <Link to="/profile/configuracoes/herdeiros">
              <button type="submit" >Cancelar</button>
            </Link>
          </div>
        </div>

      </Content>
    </Container >
  )
}
