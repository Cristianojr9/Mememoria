import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions'

import { Avatar } from '@material-ui/core';

import { BsFillGearFill } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';

import {
  Container, Detail
} from './styles';

export default function AvatarPerfil() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleConfig() {
    history.push('/profile/configuracoes');

    setShow(false);
  }

  function showDetail(e) {
    show ? (setShow(false)) : (setShow(true))
  }

  return (
    <Container onClick={showDetail} >
      <>
        <Avatar
          alt="Remy Sharp"
        />
      </>
      {
        show &&
        <Detail>
          <ul>
            <li>
              <span onClick={handleConfig}>
                <BsFillGearFill />
                Configuracoes
              </span>
            </li>
            <li>
              <span onClick={handleSignOut}>
                <BiExit />
                Sair
              </span>
            </li>
          </ul>
        </Detail>
      }
    </Container>
  )
}
