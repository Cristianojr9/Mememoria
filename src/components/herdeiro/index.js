import React from 'react';
import { useHistory } from 'react-router-dom';

import Pencil from '../../assets/pencil';

import {
  Container, Content
} from './styles';

export default function Herdeiro(props) {
  const history = useHistory();

  function ShowDetail(e) {
    e.preventDefault();
    history.push(`/profile/configuracoes/herdeiros/${props.id}`);
  }

  return (
    <Container>
      <span onClick={ShowDetail}>
        <Pencil color={'#595D5C'} size={30} />
      </span>
      <Content>
        <h2>{props.fullname}</h2>
        <p>{props.email}</p>
        <span>{props.relationship}</span>
      </Content>
    </Container>
  )
}
