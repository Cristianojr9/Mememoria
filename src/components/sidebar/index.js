import React, { useState } from 'react';

import Modal from '../../components/modal';


import { Link } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';
import { FiUploadCloud } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';

import Logo from '../../assets/logo.svg';

import { Container, Content, Options, Option } from './styles';

function Sidebar(props) {
  const [modalShow, setModalShow] = useState(false);
  /* const [value, setValue] = useState('');
  const [total, setTotal] = useState(''); */

  /* useEffect(() => {
    async function loadMemories() {
      try {
        api.get('my-memories').then(response => {
          setValue(response.data);
          const progress = value * 100 / 2000;
          setTotal(progress);
        });
      } catch {
        alert('error');
      }
    }
    loadMemories();
  }); */

  return (
    <Container>
      <Content>
        <Link to="/profile">
          <img src={Logo} alt="" />
        </Link>
        {/* <Upload onUpload={handleUpload} /> */}
        <label onClick={() => setModalShow(true)}>
          <FiUploadCloud size={35} color='#FFFFFF' />
          <span>Enviar memórias</span>
        </label>
      </Content>
      <Options>
        <ul>
          <Option to="/profile" selected={props.selected === "/profile"} >
            <FaRegHeart size={35} />
            <span>Minhas memórias</span>
          </Option>
        </ul>
        <ul>
          <Option to="/profile/diario" selected={props.selected === "/profile/diario"}>
            <HiOutlineBookOpen size={35} />
            <span>Diário</span>
          </Option>
        </ul>
        <ul>
          <Option to="/profile/memorial" selected={props.selected === "/profile/memorial"}>
            <RiFilePaper2Line size={35} />
            <span>Memorial</span>
          </Option>
        </ul>
        <ul>
          <Option to="/profile/memorias-recentes" selected={props.selected === "/profile/memorias-recentes"}>
            <AiOutlineClockCircle size={35} />
            <span>Memórias recentes</span>
          </Option>
        </ul>
        <ul>
          <Option to="/profile/lixeira" selected={props.selected === "/profile/lixeira"}>
            <BiTrash size={35} />
            <span>Lixeira</span>
          </Option>
        </ul>
      </Options>
      <div className="drive">
        <div className="steps">
          <span>2gb</span>
          <span>10Gb</span>
        </div>
        <div className="progress-bar">
          <div className="bar" style={{ width: /* `${total}` */ '20%' }}></div>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
}

export default Sidebar;
