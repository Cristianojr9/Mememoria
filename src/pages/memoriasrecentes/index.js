import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Memories from '../../components/memories/index';

import { AiOutlineSearch } from 'react-icons/ai';

import { Container, Content, ListMemories, Input } from './styles';

import Sidebar from '../../components/sidebar';
import Avatar from '../../components/avatar';

import api from '../../services/api';

function Recentes() {
  const history = useHistory();
  const [memories, setMemories] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    async function loadMemories() {
      try {
        api.get('/my-memories/recent').then(response => {
          setMemories(response.data);
        });
      } catch {
        history.push('/');
      }
    }

    loadMemories();
  }, [history]);

  return (
    <Container>
      <Sidebar selected={"/profile/memorias-recentes"} />
      <Content>
        <h1>Memórias adicionadas recentemente</h1>
        {memories.length === 0 ? (
          <h2>Nenhuma memória recente</h2>
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