import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default function ModalDownload(props) {

  async function handleDownload(e) {
    e.preventDefault();

    try {
      const response = api.get('http://localhost:8080/my-memories/download/file/c0b326b067ac81f34b76bfcc70feed60', {
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      })
        .then((response) => {
          // Create blob link to download
          const url = window.URL.createObjectURL(
            new Blob([response.data]),
          );
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute(
            'download',
            `431960_screenshots_20201010194604_1.jpg`,
          );

          // Append to html link element page
          document.body.appendChild(link);

          // Start download
          link.click();

          // Clean up and remove the link
          link.parentNode.removeChild(link);
        });

      console.log(response);

    } catch {
      console.log('Erro ao enviar, tente novamente');
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
          Baixe sua memória
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button onClick={handleDownload}>
          Download
        </button>
        <Link to='profile'>
          <span onClick={props.onHide}>Cancelar</span>
        </Link>
      </Modal.Body>
    </Modal>
  )
}
