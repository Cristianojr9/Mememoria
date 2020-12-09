import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  Container,
  Content
} from './styles';

export default function Input() {
  return (
    <Container>
      <input>
      </input>
      <button>
        <AiOutlineSearch size={30} />
      </button>

      <Content>
        <Avatar alt="Lucas" src="/static/images/avatar/1.jpg" />
      </Content>
    </Container>
  )
}
