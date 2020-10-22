import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import { FcGoogle } from 'react-icons/fc';

import Logo from '../../assets/logo.svg';

import { Container, Content, Background, ButtonGoogle } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
})

function Logon() {
  const [email, setEmail] = useState('');
  const [passwordKey, setPasswordKey] = useState('');

  const history = useHistory();

  function handleGoogle() {
    toast.error('Funcionalidade em andamento')
  }

  async function handleLogin(e) {
    const data = {
      email,
      passwordKey,
    };

    try {
      const response = await api.post('login', data);

      localStorage.setItem('email', email);
      localStorage.setItem('passwordKey', passwordKey);
      localStorage.setItem('token', response.data.bearer);

      toast.success(`Seja bem-vindo: ${response.data.firstName}`);
      history.push('/profile');
    } catch (err) {
      toast.error('Falha no login, tente novamente');
    }
  }

  return (
    <>
      <Container>
        <Content>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <Form schema={schema} onSubmit={handleLogin}>
            <ButtonGoogle onClick={handleGoogle}>
              <FcGoogle size={50} />
              Login com o Google
            </ButtonGoogle>

            <span>
              Ou
            </span>

            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              onChange={e => setPasswordKey(e.target.value)}
            />

            <div>
              <label>
                <input
                  type="checkbox"
                  value="0"
                  className="check"
                />
                <p>manter conectado</p>
              </label>

              <span>
                Esqueceu sua senha?
                <Link to="/login" onClick={handleGoogle}>Clique aqui</Link>
              </span>
            </div>

            <button type="submit">Login</button>

            <span>
              Ainda não possui conta?
              <Link to="/register">Cadastre-se aqui</Link>
            </span>
          </Form>
        </Content>
        <Background />
      </Container>
    </>
  );
}

export default Logon;