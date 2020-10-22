import React, { useState } from 'react';
//import { uniqueId } from 'lodash';
//import filesize from 'filesize';

import { Link } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';
import { FiUploadCloud } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';

import Logo from '../../assets/logo.svg';

import { Container, Content, Options, Option } from './styles';

//import Upload from '../../components/Upload';

import api from '../../services/api';

function Leftbar(props) {
  const [selectedFile, setSelectedFile] = useState();

  const token = localStorage.getItem('token');

  async function handleUpload(e) {
    setSelectedFile(e.target.files[0]);

    const file = new FormData();
    file.append('file', selectedFile);

    try {
      await api.post('my-memories/upload', file, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })

    } catch {
      alert('Erro ao enviar, tente novamente');
    }
  };

  return (
    <Container>
      <Content>
        <Link to="/profile">
          <img src={Logo} alt="" />
        </Link>
        {/* <Upload onUpload={handleUpload} /> */}
        <label>
          <FiUploadCloud size={35} />
          Enviar memorias
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
          />
        </label>
      </Content>
      <Options>
        <ul>
          <Option to="/profile" selected={props.selected === "/profile"}>
            <FaRegHeart size={35} />
            Minhas memórias
          </Option>
        </ul>
        <ul>
          <Option to="/profile/diario" selected={props.selected === "/profile/diario"}>
            <HiOutlineBookOpen size={35} />
            Diário
        </Option>
        </ul>
        <ul>
          <Option to="/profile/memorial" selected={props.selected === "/profile/memorial"}>
            <RiFilePaper2Line size={35} />
            Memorial
        </Option>
        </ul>
        <ul>
          <Option to="/profile/memoria-recentes" selected={props.selected === "/profile/memoria-recentes"}>
            <AiOutlineClockCircle size={35} />
            Memórias recentes
        </Option>
        </ul>
        <ul>
          <Option to="/profile/lixeira" selected={props.selected === "/profile/lixeira"}>
            <BiTrash size={35} />
            Lixeira
        </Option>
        </ul>
      </Options>
      <div>
        barra
      </div>
    </Container>
  )
}

export default Leftbar;
