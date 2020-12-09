import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

import { Container, Image, NavLinks, Button } from './styles';

export default function Header() {
  return (
    <Container>
      <Image>
        <img src={Logo} alt="" />
      </Image>

      <NavLinks>
        <ul>
          <li>
            <Link to='/'>
              home
            </Link>
          </li>
          <li>
            <Link to='/'>
              home
            </Link>
          </li>
          <li>
            <Link to='/'>
              home
            </Link>
          </li>
          <li>
            <Link to='/'>
              home
            </Link>
          </li>
        </ul>
      </NavLinks>

      <Button>
        <Link to="/login">
          <button type="submit">Login</button>
        </Link>
      </Button>
    </Container>
  )
}
