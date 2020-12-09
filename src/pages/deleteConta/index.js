import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signOut } from '../../store/modules/auth/actions'

import api from '../../services/api';

import IconTrash from '../../assets/trash.js';

import Sidebar from '../../components/sidebar';

import { toast } from 'react-toastify';

import {
  Container,
  NavLinks,
  Content
} from './styles'

export default function DeleteConta() {
  const emailUser = useSelector(state => state.user.profile.email);
  const [passwordKey, setPasswordKey] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  function handleDelete() {
    const data = JSON.stringify({
      email: emailUser,
      passwordKey: passwordKey
    })

    if (passwordKey === '') {
      toast.error('Preencha o campo de senha');
    } else {
      const r = window.confirm('Deseja apagar mesmo sua conta?');

      if (r === true) {
        api({
          method: 'delete',
          url: '/person/remove-account',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        })

        dispatch(signOut());
      }
    }

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
            <span>Para apagar sua conta do mememoria digite sua senha</span>
            <input type="password" onChange={e => setPasswordKey(e.target.value)} />
            <button type="submit" onClick={handleDelete}>
              <IconTrash size={30} />
              Apagar conta
            </button>
          </section>
        </div>
      </Content>
    </Container>
  )
}
