import React, { useEffect, useState } from 'react';

import Memories from '../../components/memories/index';
import Sidebar from '../../components/sidebar';

import {
  Container,
  Content,
  ListMemories
} from './styles';

import api from '../../services/api';

export default function Memorial() {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    async function loadMemories() {
      api.get('my-memories').then(response => {
        setMemories(response.data.slice(0, 4));
      });
    }
    loadMemories();
  }, []);

  return (
    <Container>
      <Sidebar selected={"/profile/memorial"} />
      <Content>
        <h1>7 de Novembro, 2020</h1>
        <textarea type='text'></textarea>
        <button >Salvar</button>
        {memories.length === 0 ? (
          <h2>Nenhuma memória favorita</h2>
        ) : (
            <ListMemories>
              {memories
                .map((memorie) => (
                  <Memories
                    id={memorie.id}
                    key={memorie.name + memorie.type}
                    name={memorie.name}
                    preview={memorie.type}
                    favorited={memorie.favorited}
                  />
                )

                )
              }
            </ListMemories>
          )}
      </Content>
    </Container>
  )
}
