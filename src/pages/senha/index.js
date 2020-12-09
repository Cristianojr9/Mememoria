import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, NavLinks, Content
} from './styles';

import Sidebar from '../../components/sidebar';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Senha() {
  const [actualPassword, setActualPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  async function updateSenha(e) {
    e.preventDefault();

    try {
      api.put('/person/details/change-password', {
        actualPassword: actualPassword,
        newPassword: newPassword,
      })
      toast.success('Dados atualizados');
    } catch (err) {
      toast.error('Senha atual está incorreta');
    }
  }

  function resetInput() {
    setActualPassword('');
    setConfirmedPassword('');
    setNewPassword('');
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
        <div>
          <section>
            <label>Senha Atual</label>
            <input
              name="oldPassword"
              type="password"
              value={actualPassword}
              onChange={e => setActualPassword(e.target.value)}
            />
            <label>Nova Senha</label>
            <input
              name="newPassword"
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
            <label>Confirmar nova senha</label>
            <input
              name="newPassword"
              type="password"
              value={confirmedPassword}
              onChange={e => setConfirmedPassword(e.target.value)}
            />
            <div>
              <button type="submit" onClick={updateSenha}>Salvar</button>
              <button type="submit" onClick={resetInput}>Cancelar</button>
            </div>
          </section>
        </div>
      </Content>
    </Container>
  )
}
