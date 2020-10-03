import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FcGoogle } from 'react-icons/fc';

import Logo from '../../assets/logo.svg';

import { Container, Content, Background, Button, ButtonGoogle } from './styles';

function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleGoogle() {
    toast.error('Funcionalidade em andamento')
  }

  function handleLogon() {
    toast.error('Funcionalidade em andamento')
  }

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      lastName,
      email,
      password,
    };

    try {
      //const response = await api.post('/users', data);

      //toast.success(`Seja bem-vindo: ${response.data.name}`);

      history.push('/profile');
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
                maxlength="150"
                required
                pattern="[A-Za-z ']{4,}"
              />
              <input
                type="name"
                placeholder="Sobrenome"
                maxlength="150"
                required
                pattern="[A-Za-z ']{4,}"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              maxlength="150"
              required
            />

            <input
              type="password"
              placeholder="Senha"
              maxlength="15"
              required
            />

            <Button type="submit">Cadastre-se</Button>
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