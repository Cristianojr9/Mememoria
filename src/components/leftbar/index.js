import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import Upload from '../../assets/upload.svg';
import Book from '../../assets/book.svg';
import Clock from '../../assets/clock.svg';
import Heart from '../../assets/heart.svg';
import License from '../../assets/license.svg';
import Trash from '../../assets/trash.svg';

import { Container, Content, Options } from './styles';

export default function Leftbar() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="" />
        <label>
          <img src={Upload} alt="" />
          Enviar memorias
          <input
            type="file"
            accept="image/png, image/jpeg, audio/mp4, video/mp4"
          />
        </label>
      </Content>
      <Options>
        <ul>
          <Link>
            <img src={Heart} alt="" />
            Minhas memórias
        </Link>
        </ul>
        <ul>
          <Link>
            <img src={Book} alt="" />
            Diário
        </Link>
        </ul>
        <ul>
          <Link>
            <img src={License} alt="" />
            Memorial
        </Link>
        </ul>
        <ul>
          <Link>
            <img src={Clock} alt="" />
            Memórias recentes
        </Link>
        </ul>
        <ul>
          <Link>
            <img src={Trash} alt="" />
            Lixeira
        </Link>
        </ul>
      </Options>
      <div>
        barra
      </div>
    </Container>
  )
}
