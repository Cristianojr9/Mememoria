import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import { FcGoogle } from 'react-icons/fc';

import Logo from '../../assets/logo.svg';

import { Container, Content, Background, ButtonGoogle } from './styles';

import api from '../../services/api';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordKey, setPasswordKey] = useState('');

  const history = useHistory();

  function handleGoogle() {
    toast.error('Funcionalidade em andamento')
  }

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      passwordKey,
    };

    try {
      const response = await api.post('/sign-in', data);

      toast.success(`Cadastro realizado, ${response.data.firstName}, Bem vindo!`, {
        position: toast.POSITION.TOP_LEFT
      });

      history.push('/login');
    } catch (err) {
      toast.error('Erro no cadastro, tente novamente');
    }
  }

  return (
    <>
      <Container>
        <Background />
        <Content>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <form onSubmit={handleRegister}>
            <ButtonGoogle onClick={handleGoogle}>
              <FcGoogle size={50} />
              Cadastre-se com o Google
            </ButtonGoogle>

            <span>
              Ou se cadastre manualmente
            </span>

            <div className="inputGroup">
              <input
                type="name"
                placeholder="Nome"
                required
                onChange={e => setFirstName(e.target.value)}
              />
              <input
                type="name"
                placeholder="Sobrenome"
                required
                onChange={e => setLastName(e.target.value)}
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              required
              onChange={e => setPasswordKey(e.target.value)}
            />

            <button type="submit">Cadastre-se</button>

            <span>
              Já possui conta?
              <Link to="/login">Entre agora</Link>
            </span>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default Register;