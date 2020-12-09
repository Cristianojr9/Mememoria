import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { FiDownloadCloud } from 'react-icons/fi';
import { BiTrash } from 'react-icons/bi'

import Sidebar from '../../components/sidebar';

import api from '../../services/api';

import { toast } from 'react-toastify';

import QRCode from 'qrcode.react';

import {
  Container,
  Content
} from './styles';

export default function InfoMemorie() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [favorited, setFavorited] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function loadMemories() {
      try {
        api.get(`my-memories/${id}`)
          .then(response => {
            setName(response.data.name);
            setFavorited(response.data.favorited);
          })

      } catch {
        console.log('error')
      }
    }
    loadMemories()
  }, [id]);

  async function favorite() {
    api({
      url: `/my-memories/memory/${id}/favorite`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: true
    })

    toast.success('memoria salva');
  }

  async function deleteMemorie() {
    api.delete(`/my-memories/memory/${id}`);

    history.push('/profile');

    toast.success('Memória apagada');

    window.location.reload();
  }

  async function updateName() {
    try {
      api.put(`/my-memories/memory/${id}/rename`, {
        newMemoryName: name
      });

      toast.success('Nome atualizado com sucesso');
    } catch (err) {
      toast.error('Erro ao atualizar o nome');
    }
  }

  async function download(e) {
    try {
      api({
        url: `/my-memories/download/file/${id}`,
        method: 'GET',
        responseType: 'blob'
      })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));

          const link = document.createElement('a');

          link.href = url;

          link.setAttribute('download', `${name}`);

          document.body.appendChild(link);

          link.click();
        })
    } catch (error) {
      alert('not found');
    }
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <div className="content">
          <Link to='/profile'>
            <IoMdArrowRoundBack size={35} />
            Voltar
          </Link>
          <div className="qrcode">
            <QRCode value={`/my-memories/download/file/${id}`} size={200} />
          </div>
          <h1>{name}</h1>
          <div>
            <input
              placeholder='nome da memorias'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button onClick={updateName}>Salvar</button>
          </div>
          <section>
            <button onClick={favorite}>
              {favorited ?
                'Favoritado' :
                'Favoritar'
              }
            </button>
            <button onClick={deleteMemorie}>
              <BiTrash size={25} />
              Apagar
            </button>
            <button onClick={(e) => download(e)}>
              <FiDownloadCloud size={25} />
              Download
            </button>
          </section>
        </div>
      </Content>
    </Container>
  )
}