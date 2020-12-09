import React from 'react';

import IconRestore from '../../assets/arrow-back-up';
import IconTrash from '../../assets/trash';

import { Container } from './styles';

import api from '../../services/api';

import { toast } from 'react-toastify';

export default function OptionsPasta(props) {

  async function handleDelete() {
    api.delete(`/trash/${props.id}`);

    toast.success('Memória apagada');

    window.location.reload();
  }

  async function handleRecover() {
    api.put(`/trash/${props.id}/recover`);

    toast.success('Memória restaurada');

    window.location.reload();
  }

  return (
    <Container>
      <span onClick={handleRecover}>
        <IconRestore size={40} color={"#595D5C"} />
      </span>
      <span onClick={handleDelete}>
        <IconTrash size={40} color={"#595D5C"} />
      </span>
    </Container>
  )
}
