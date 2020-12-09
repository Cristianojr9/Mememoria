import React, { useState } from 'react';

import Sidebar from '../../components/sidebar';

import { toast } from 'react-toastify';

import {
  Container,
  Content
} from './styles';

import api from '../../services/api';

import 'antd/dist/antd.css';
import { DatePicker, ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/pt_BR';
import moment from 'moment';
import 'moment/locale/pt-br';

export default function Diario() {
  const [diario, setDiario] = useState('');
  const [newDate, setNewDate] = useState('');
  const [date, setDate] = useState('');

  async function loadDiario(dateString) {
    try {
      api.get(`/diary/${dateString}`).then(response => {
        setDiario(response.data.content);
      });
    } catch (err) {
      setDiario('');
    }
  }

  async function addDiario(e) {
    e.preventDefault();

    api({
      url: `/diary/${newDate}`,
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text',
      data: diario,
    })

    toast.success('Diário salvo')
    setDiario('');
  }

  function onChange(date, dateString) {
    const TesteData = dateString.replace(/-/g, '');
    setNewDate(TesteData);
    setDate(TesteData);

    loadDiario(TesteData);
  }

  return (
    <Container>
      <Sidebar selected={"/profile/diario"} />
      <Content>
        <section>
          <h1>Aqui você salva seu diário</h1>
          <div>
            <ConfigProvider locale={locale}>
              <DatePicker onChange={onChange} placeholder="Selecione a Data" />
            </ConfigProvider>
          </div>
          <textarea type='text' value={diario} onChange={e => setDiario(e.target.value)}></textarea>
          <button onClick={addDiario}>Salvar</button>
        </section>
      </Content>
    </Container>

  )
}
