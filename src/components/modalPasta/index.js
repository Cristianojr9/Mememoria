import React, { useState } from 'react';
import qs from 'qs';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import api from '../../services/api';

import { toast } from 'react-toastify';

import {
  Button,
  Span,
  Form
} from './styles';

export default function ModalPasta(props) {
  const [name, setName] = useState('');

  async function handleUpload(e) {
    e.preventDefault();

    let data = qs.stringify({
      'path': '/',
      'name': `${name}`
    });

    try {
      api({
        method: 'POST',
        url: 'my-memories/folders',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
      })

      toast.success('Pasta criada');
      setName('');

    } catch {
      toast.error('Pasta já existente ou faça login novamente');
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      modalShow={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crie a pasta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <input
            type="text"
            place="Nome da pasta"
            onChange={e => setName(e.target.value)}
          />
        </Form>

        <Button onClick={handleUpload}>Criar</Button>
        <Link to='profile'>
          <Span onClick={props.onHide}>Cancelar</Span>
        </Link>
      </Modal.Body>
    </Modal>
  )
}
