import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';

import Memorie from '../../components/lixeiraMemories';
import Sidebar from '../../components/sidebar';

import api from '../../services/api';

import { toast } from 'react-toastify';

import {
  Container,
  Content
} from './styles';

export default function InfoMemorie() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const history = useHistory();

  useEffect(() => {
    async function loadMemories() {
      try {
        api.get(`trash/${id}`)
          .then(response => {
            setName(response.data.name);
            setType(response.data.type);
          })
      } catch {
        console.log('error')
      }
    }
    loadMemories()
  }, [id]);

  async function deleteMemorie() {
    api.delete(`/trash/${id}`);

    history.push('/profile');

    toast.success('Memória apagada');

    window.location.reload();
  }


  return (
    <Container>
      <Sidebar />
      <Content>
        <div className="memoria">
          <Link to='/profile/lixeira'>
            <IoMdArrowRoundBack size={35} />
            Voltar
          </Link>
          <h1>Minhas memórias</h1>
          <Memorie
            id={id}
            key={name + type}
            name={name}
            preview={type}
          />
          <div className="button-group">
            <button onClick={deleteMemorie}>Excluir memória</button>
          </div>
        </div>
      </Content>
    </Container>
  )
}