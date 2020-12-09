import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Content, ListMemories } from './styles';

import Memories from '../../components/lixeiraMemories';
import Sidebar from '../../components/sidebar';

import api from '../../services/api';

function Lixeira() {
  const history = useHistory();
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    async function loadMemories() {
      try {
        api.get('/trash').then(response => {
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
      <Sidebar selected={"/profile/lixeira"} />
      <Content>
        <h1>Lixeira</h1>
        {memories.length === 0 ? (
          <h2>Nenhuma memória apagada</h2>
        ) : (
            <ListMemories>
              {memories
                .map((memorie) => (
                  <Memories
                    id={memorie.id}
                    key={memorie.name + memorie.type}
                    name={memorie.name}
                    preview={memorie.type}
                  />
                ))
              }
            </ListMemories>
          )}
      </Content>
    </Container>
  )
}

export default Lixeira;