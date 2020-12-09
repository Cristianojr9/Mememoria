import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

import Memories from '../../components/memories/index';

import { IoMdArrowRoundBack } from 'react-icons/io';
import IconRestore from '../../assets/arrow-back-up';
import IconTrash from '../../assets/trash';

import { Container, Content, ListMemories, Options } from './styles';

import Sidebar from '../../components/sidebar';

import api from '../../services/api';

import { toast } from 'react-toastify';

function Recentes() {
  const history = useHistory();
  const { id } = useParams();
  const [memories, setMemories] = useState([]);
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadMemories() {
      try {
        api.get(`/my-memories/folders/${id}`).then(response => {
          setMemories(response.data.content);
          setName(response.data.folderName);
        });
      } catch {
        history.push('/');
      }
    }

    loadMemories();
  });

  async function handleDelete() {
    const r = window.confirm('Deseja apagar a pasta?');

    if (r === true) {
      api.delete(`/my-memories/folders/${id}`);

      toast.success('Pasta apagada');

      history.push('/profile');
    } else {
      return;
    }
  }

  return (
    <Container>
      <Sidebar selected={"/profile"} />
      <Content>
        <Link to='/profile'>
          <IoMdArrowRoundBack size={35} />
            Voltar
          </Link>
        <h1>{name}</h1>
        <Options>
          <span onClick={handleDelete}>
            <IconTrash size={40} color={"#595D5C"} />
          </span>
        </Options>

        {memories.length === 0 ? (
          <h2>Nenhuma memória na pasta</h2>
        ) : (
            <ListMemories>
              {memories
                .filter((memorie) => {
                  if (memorie.name.includes(value)) return true
                })
                .map((memorie) => (
                  <Memories
                    id={memorie.id}
                    key={memorie.name + memorie.type}
                    name={memorie.name}
                    preview={memorie.type}
                    favorited={memorie.favorited}
                  />
                ))
              }
            </ListMemories>
          )}
      </Content>
    </Container>
  )
}

export default Recentes;