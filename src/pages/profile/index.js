import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Memories from '../../components/memories';
import Modal from '../../components/modalPasta';
import Sidebar from '../../components/sidebar';
import Avatar from '../../components/avatar';

import { AiOutlineSearch } from 'react-icons/ai';
import IconFolder from '../../assets/folder-plus';

import { Container, Content, ListMemories, Input } from './styles';


import api from '../../services/api';

function Profile() {
  const [memories, setMemories] = useState([]);
  const [value, setValue] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function loadMemories() {
      try {
        api.get('my-memories').then(response => {
          setMemories(response.data);
        });
      } catch (err) {
        history.push('/');
      }
    }

    loadMemories();
  });

  return (
    <Container>
      <Sidebar selected={"/profile"} />
      <Content>
        <Input>
          <input
            type="text"
            defaultValue={value}
            onChange={e => setValue(e.target.value)}
          />
          <button >
            <AiOutlineSearch size={30} />
          </button>

          <Avatar />
        </Input>
        <div className="header">
          <h1>Minhas memórias</h1>
          <IconFolder color={'#595D5C'} size={40} onClick={() => setModalShow(true)} />
        </div>

        {memories.length === 0 ? (
          <h2>Nenhuma memória salva</h2>
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
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
}

export default Profile;