import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import Logo from '../../assets/logo1.svg';

import { Container, Content, Background } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
})

function Logon() {
  /* const [email, setEmail] = useState('');
  const [passwordKey, setPasswordKey] = useState(''); */
  const loading = useSelector(state => state.auth.loading);
  const dispath = useDispatch();

  async function handleSubmit({ email, password }) {
    dispath(signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Content>

          <h1>Login</h1>
          <Form schema={schema} onSubmit={handleSubmit}>
            {/* <ButtonGoogle onClick={handleGoogle}>
              <FcGoogle size={50} />
              Login com o Google
            </ButtonGoogle>

            <span>
              Ou
            </span> */}
            <Input
              name="email"
              type="email"
              placeholder="Email"
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
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
                <Link to="/forget-password">Clique aqui</Link>
              </span>
            </div>

            <button type="submit">{loading ? 'Carregando...' : 'Login'}</button>

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