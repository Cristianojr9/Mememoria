import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FcGoogle } from 'react-icons/fc';

import Logo from '../../assets/logo.svg';

import { Container, Content, Background, Button, ButtonGoogle } from './styles';

function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleGoogle() {
    toast.error('Funcionalidade em andamento')
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      //const response = await api.post('sessions', { id });

      //localStorage.setItem('ongId', id);
      //localStorage.setItem('ongName', response.data.name);
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
          <form onSubmit={handleLogin}>
            <ButtonGoogle onClick={handleGoogle}>
              <FcGoogle size={50} />
              Login com o Google
            </ButtonGoogle>

            <span>
              Ou
            </span>

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


            <Button type="submit" onClick={handleLogin}>Login</Button>

            <span>
              Ainda não possui conta?
              <Link to="/register">Cadastre-se aqui</Link>
            </span>
          </form>
        </Content>
        <Background />
      </Container>
    </>
  );
}

export default Logon;