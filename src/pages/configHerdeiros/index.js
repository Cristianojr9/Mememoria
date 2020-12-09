import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import {
  Container, NavLinks, Content
} from './styles';

import Sidebar from '../../components/sidebar';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function ConfigHeirs() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [relationship, setRelationship] = useState('');

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    async function loadHeir() {
      api.get(`heirs/${id}`).then(response => {
        setFullname(response.data.fullname);
        setEmail(response.data.email);
        setCellphone(response.data.cellphone);
        setRelationship(response.data.relationship);
      });
    }
    loadHeir();
  }, []);

  function handleTelefone(event) {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    var str = event.target.value.replace(/[^0-9]/g, "").slice(0, 11);

    const result = str.replace(regex, "($1)$2-$3");

    setCellphone(result);
  }

  async function update(e) {
    e.preventDefault();

    const data = {
      fullname: fullname,
      email: email,
      cellphone: cellphone,
    }

    api.put(`heirs/${id}`, data);

    toast.success('Dados atualizados');
  }

  async function deleteHeir() {
    api.delete(`heirs/${id}`);

    history.push('/profile/configuracoes/herdeiros');
    window.location.reload();
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
            </section>
            <section>
              <label>Parentesco/Vínculo</label>
              <ul>
                <li>
                  <input type="radio" checked />
                  <label>{relationship}</label>
                </li>
                {/* <li>
                  <input type="radio" />
                  <label>Esposa</label>
                </li>
                <li>
                  <input type="radio" />
                  <label>Filho</label>
                </li>
                <li>
                  <input type="radio" />
                  <label>Filho</label>
                </li>
                <li>
                  <input type="radio" />
                  <label>Filha</label>
                </li>
                <li>
                  <input type="radio" />
                  <label>Irmão</label>
                </li>
                <li>
                  <input type="radio" />
                  <label>Irmã</label>
                </li>
                <li>
                  <input type="radio" />
                  <label>Outro</label>
                </li> */}
              </ul>
              <label>Telefone</label>
              <input type="text" value={cellphone} onChange={handleTelefone.bind(this)} />
            </section>
          </div>
          <div className="button">
            <button type="submit" onClick={update}>Salvar</button>
            <Link to="/profile/configuracoes/herdeiros">
              <button type="submit" >Cancelar</button>
            </Link>
            <button onClick={deleteHeir}>Apagar</button>
          </div>
        </div>

      </Content>
    </Container>
  )
}
