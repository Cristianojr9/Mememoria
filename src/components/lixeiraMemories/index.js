import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Options from '../../components/optionsTrash';

import {
  Container,
  MemoriesInfo,
}
  from './styles';

import IconMovie from '../../assets/movie';
import IconPhoto from '../../assets/photo';
import IconFolder from '../../assets/folder';
import IconMusic from '../../assets/file-music';
import IconText from '../../assets/file-text'

import api from '../../services/api';

export default function Memories(props) {
  const [previewImg, setPreviewImg] = useState();
  const [show, setShow] = useState(false);

  const history = useHistory();

  function showDetail(e) {
    show ? (setShow(false)) : (setShow(true));
  }

  useEffect(() => {
    async function getPreview() {
      api.get(`my-memories/memory/${props.id}/view`, { responseType: 'blob' })
        .then(response => {
          let imageNode = document.getElementById('image');
          let imgUrl = URL.createObjectURL(response.data)
          setPreviewImg(imgUrl);
        });
    }
    getPreview();
  }, [props.id]);

  return (
    <Container>
      <li onClick={showDetail}>
        <MemoriesInfo >
          <span>
            {props.preview === 'image/jpeg' ?
              <img src={previewImg} alt="" /> :
              props.preview === 'dir' ?
                <IconFolder size={140} color={'#FFC02F'} /> :
                props.preview === 'video/mp4' ?
                  <div className="icon">
                    <IconMovie size={140} color={'#AF52DE'} />
                  </div> :
                  props.preview === 'application/pdf' ?
                    <IconText size={140} color={'#2832D3'} /> :
                    <IconMusic size={140} color={'#FF5921'} />
            }
          </span>
          <div>
            <span>
              {props.preview === 'image/jpeg' ?
                <IconPhoto size={40} color={'#FF1417'} /> :
                props.preview === 'dir' ?
                  <IconFolder size={40} color={'#FFC02F'} /> :
                  props.preview === 'video/mp4' ?
                    <div className="icon">
                      <IconMovie size={40} color={'#AF52DE'} />
                    </div> :
                    props.preview === 'application/pdf' ?
                      <IconText size={40} color={'#2832D3'} /> :
                      <IconMusic size={40} color={'#FF5921'} />
              }
            </span>
            <strong>{props.name}</strong>
          </div>
        </MemoriesInfo>
      </li>
      {show && <Options id={props.id} />}
    </Container>
  )
}
