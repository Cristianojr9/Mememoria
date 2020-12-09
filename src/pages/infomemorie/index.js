import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { FiDownloadCloud } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import Modal from '../../components/modalListPastas';
import Memorie from '../../components/memories';
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
  const [type, setType] = useState('');
  const [favorited, setFavorited] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function loadMemories() {
      try {
        api.get(`my-memories/${id}`)
          .then(response => {
            setName(response.data.name);
            setType(response.data.type);
            setFavorited(response.data.favorited);
            console.log(response.data.path)
          })
      } catch {
        console.log('error')
      }
    }
    loadMemories()
  }, [id]);


  async function favorite() {
    if (!favorited) {
      api({
        url: `/my-memories/memory/${id}/favorite`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        data: true
      })

      setFavorited(true);
    } else {
      api({
        url: `/my-memories/memory/${id}/favorite`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        data: false
      })

      setFavorited(false);
    }
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

  function handleMover() {
    setModalShow(true);
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <div className="memoria">
          <Link to='/profile'>
            <IoMdArrowRoundBack size={35} />
            Voltar
          </Link>
          <Memorie
            id={id}
            key={name + type}
            name={name}
            preview={type}
          />
        </div>
        <div className="content">
          <div className="qrcode">
            <p></p>
            <QRCode value={`/my-memories/download/file/${id}`} size={200} fgColor={'#111'} className="qrcode-img" />
            <div className="input-group">
              <input
                placeholder='nome da memorias'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              {/* <button onClick={updateName}>Salvar</button> */}
            </div>
          </div>
          <div className="options">
            <span onClick={favorite}>
              {
                favorited ? (
                  <>
                    <AiFillHeart size={30} />
                    favorito
                  </>
                ) : (
                    <>
                      <AiOutlineHeart size={30} />
                      favoritar
                    </>
                  )
              }
            </span>
            <span onClick={download}>
              <FiDownloadCloud size={30} />
              download
            </span>
          </div>
          <div className="button-group">
            <button onClick={updateName}>Salvar alterações</button>
            <button onClick={handleMover} className="mover">Mover memória</button>
            <button onClick={deleteMemorie} className="excluir">Excluir memória</button>
          </div>
        </div>
      </Content>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
}