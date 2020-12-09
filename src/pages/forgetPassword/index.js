import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import qs from 'qs';
import * as Yup from 'yup';

import Logo from '../../assets/logo1.svg';

import { Container, Content, Background } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório')
})

function ForgetPassword() {
  const [email, setEmail] = useState('');

  const data = qs.stringify({
    'email': `${email}`
  })

  async function handleSubmit() {
    api({
      method: 'post',
      url: '/forgot-password',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    })
  }

  return (
    <>
      <Container>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Content>
          <h1>Recuperar acesso</h1>
          <Form schema={schema} onSubmit={handleSubmit}>
            {/* <ButtonGoogle onClick={handleGoogle}>
              <FcGoogle size={50} />
              Login com o Google
            </ButtonGoogle>
            <span>
              Ou
            </span> */}
            <span>
              Informe seu email e enviaremos um link de <br /> recuperação de senha para o mesmo.
            </span>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <div className="inputGroup">
              <button type="submit">Enviar</button>
              <Link to="/login">
                <button type="submit" className="cancelar">Cancelar</button>
              </Link>
            </div>

          </Form>
        </Content>
        <Background />
      </Container>
    </>
  );
}

export default ForgetPassword;