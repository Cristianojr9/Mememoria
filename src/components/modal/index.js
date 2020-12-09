import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import api from '../../services/api';

import { toast } from 'react-toastify';

import {
  Button,
  Span
} from './styles';

export default function ModalTest(props) {
  const [selectedFile, setSelectedFile] = useState();
  const [name, setName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getId() {
      api.get(`/my-memories/folders/${id}`).then(response => {
        setName(response.data.folderName);
      });
    }

    getId();
  }, [id]);

  function handleFile(e) {
    setSelectedFile(e.target.files[0]);
  }

  async function handleUpload(e) {
    e.preventDefault();

    let file = new FormData();
    file.append('file', selectedFile);

    if (name === '') {
      file.append('path', '/');
    } else {
      file.append('path', `/${name}/`);
    }

    try {
      api({
        method: 'POST',
        url: 'my-memories/upload',
        data: file,
      })

      toast.success('Memória adicionada');

    } catch {
      toast.error('Memória já existente ou faça login novamente');
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
          Envie agora sua memória
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input
            type="file"
            accept="image/*, video/*, audio/*, .doc, .docx, .pdf, .mp3"
            onChange={handleFile}
          />
        </form>

        <Button onClick={handleUpload}>Enviar</Button>
        <Link to='profile'>
          <Span onClick={props.onHide}>Cancelar</Span>
        </Link>
      </Modal.Body>
    </Modal>
  )
}
