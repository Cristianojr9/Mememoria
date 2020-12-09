import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import Logo from '../../assets/logo1.svg';

import { Container, Content, Background } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  firstName: Yup.string().required('Seu nome é obrigatório'),
  LastName: Yup.string().required('Seu nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
})

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordKey, setPasswordKey] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    //dispatch(signUpRequest(firstName, lastName, email, passwordKey));
    e.preventDefault();

    try {
      const response = await api.post('/sign-up', {
        firstName,
        lastName,
        email,
        passwordKey,
      });

      toast.success(`Cadastro realizado, ${response.data.firstName}, Bem vindo!`, {
        position: toast.POSITION.TOP_LEFT,
      });

      history.push('/login');
    } catch (err) {

      toast.error('Email já cadastrado, realize login novamente');
    }
  }

  return (
    <>
      <Container>
        <Background />
        <Content>
          <form onSubmit={handleRegister} schema={schema}>
            {/* <ButtonGoogle onClick={handleGoogle}>
              <FcGoogle size={50} />
              Cadastre-se com o Google
            </ButtonGoogle>

            <span>
              Ou se cadastre manualmente
            </span>
            */}

            <h1>Cadastre-se na Mememoria</h1>
            <div className="inputGroup">
              <input
                type="name"
                placeholder="Nome"
                onChange={e => setFirstName(e.target.value)}
              />
              <input
                type="name"
                placeholder="Sobrenome"
                onChange={e => setLastName(e.target.value)}
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              onChange={e => setPasswordKey(e.target.value)}
            />

            <button type="submit">Cadastre-se</button>
          </form>
          <span>
            Já possui conta?
              <Link to="/login">Entre agora</Link>
          </span>
        </Content>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </Container>
    </>
  );
}

export default Register;