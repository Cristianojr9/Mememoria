import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, NavLinks, Content
} from './styles';

import Sidebar from '../../components/sidebar';
import Herdeiro from '../../components/herdeiro';

import Plus from '../../assets/plus';

import api from '../../services/api';

export default function Herdeiros() {
  const [herdeiros, setHerdeiros] = useState([]);

  useEffect(() => {
    async function loadHerdeiros() {
      api.get('heirs').then(response => {
        setHerdeiros(response.data);
      });
    }
    loadHerdeiros();
  }, []);

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
            <div className="listHerdeiro">
              {herdeiros.map((herdeiro) => (
                <Herdeiro
                  key={herdeiro.heirId}
                  id={herdeiro.heirId}
                  fullname={herdeiro.fullname}
                  email={herdeiro.email}
                  relationship={herdeiro.relationship}
                />
              ))}
              <ul>
                <Link to="/profile/configuracoes/herdeiros/new">
                  <li>
                    <Plus size={140} color={'#06B781'} />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

      </Content>
    </Container>
  )
}
