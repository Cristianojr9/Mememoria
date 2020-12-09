import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import qs from 'qs';
import Modal from 'react-bootstrap/Modal';

import api from '../../services/api';

import PastaInfo from '../pastaInfo';

import { toast } from 'react-toastify';

import {
  Button,
  Span,
  Form
} from './styles';

export default function ModalTest(props) {
  const [selectedFile, setSelectedFile] = useState();
  const [pastas, setPastas] = useState([]);
  const [path, setPath] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getId() {
      api.get('my-memories').then(response => {
        setPastas(response.data);
      });
    }

    getId();
  });

  async function handleUpload() {
    const data = qs.stringify({
      'destinationPath': `${path}`,
    });

    if (path === '/') {
      toast.error('Memória não está em nenhuma pasta');
    } else {
      api({
        method: 'POST',
        url: `/my-memories/memory/${id}/move`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data,
      })

      toast.success('Memória adicionada na pasta selecionada');
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
          Selecionar pasta destino
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="div-select">
            <select name="pastas" id="pastas" onChange={e => setPath(e.target.value)} >
              <option>Suas pastas</option>
              <option value="/">
                Remover da pasta
                    </option>
              {pastas
                .map((pasta) => (
                  pasta.type === 'dir' ?
                    <option value={`${pasta.path}`}>
                      {pasta.name}
                    </option>
                    : <li></li>
                ))}
            </select>
          </div>
        </Form>

        <Button onClick={handleUpload}>Mover</Button>
        <Link to='profile'>
          <Span onClick={props.onHide}>Cancelar</Span>
        </Link>
      </Modal.Body>
    </Modal>
  )
}
