import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { toast } from 'react-toastify';

import Sidebar from '../../components/sidebar';

import {
  Container,
  NavLinks,
  Content
} from './styles';

export default function Configuracao() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthdayDate, setBirthdayDate] = useState({});
  const [gender, setGender] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const email = useSelector(state => state.user.profile.email);

  function handleTelefone(event) {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    var str = event.target.value.replace(/[^0-9]/g, "").slice(0, 11);

    const result = str.replace(regex, "($1)$2-$3");

    setCellPhone(result);
  }

  useEffect(() => {
    async function getProfile() {
      api.get('/person/details').then(response => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setFullName(response.data.fullName);
        setBirthdayDate(response.data.birthdayDate);
        setGender(response.data.gender);
        setCellPhone(response.data.cellPhone);
      })
    }
    getProfile();
  }, []);

  async function updateProfile(e) {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      birthdayDate: birthdayDate,
      gender: gender,
      cellPhone: cellPhone
    }

    api.put('/person/details', data);

    toast.success('Dados atualizados');
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Configurações</h1>
        <NavLinks>
          <ul>
            <li>
              <Link to="/profile/configuracoes">Editar Perfil</Link>
            </li>
            <li>
              <Link to="/profile/configuracoes/senha">Alterar Senha</Link>
            </li>
            <li>
              <Link to="/profile/configuracoes/herdeiros">Gerenciar Herdeiros</Link>
            </li>
            <li>
              <Link to="/profile/configuracoes/conta">Conta</Link>
            </li>
          </ul>
        </NavLinks>
        <div>
          <section>
            <label>Nome Prefencial</label>
            <input name="name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <label>Email</label>
            <input name="email" value={email} disabled />
            <label>Genero</label>
            <ul>
              <li>
                <input type="radio" value={gender} onChange={e => setGender(e.target.value)} checked={gender === 'M'} />
                <label>Masculino</label>
              </li>
              <li>
                <input type="radio" value={gender} onChange={e => setGender(e.target.value)} checked={gender === 'F'} />
                <label>Feminino</label>
              </li>
              <li>
                <input type="radio" value={gender} onChange={e => setGender(e.target.value)} checked={gender === 'O'} />
                <label>Outro</label>
              </li>
            </ul>

          </section>
          <section>
            <label>Nome Completo</label>
            <input name="name" value={firstName + ' ' + lastName} onChange={e => setFullName(e.target.value)} />
            <label>Telefone</label>
            <input type="text" value={cellPhone} onChange={handleTelefone.bind(this)} />
            <label>Data de Nascimento</label>
            <input type="date" value={birthdayDate} onChange={e => setBirthdayDate(e.target.value)} />
            <div>
              <button type="submit" onClick={updateProfile}>Salvar</button>
              <button type="submit" >Cancelar</button>
            </div>
          </section>
        </div>
      </Content>
    </Container>
  )
}
