import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import IconMovie from '../../assets/movie';
import IconPhoto from '../../assets/photo';
import IconFolder from '../../assets/folder';
import IconMusic from '../../assets/file-music';
import IconText from '../../assets/file-text'
import api from '../../services/api';

import {
  Container,
  MemoriesInfo,
}
  from './styles';

export default function Memories(props) {
  const [previewImg, setPreviewImg] = useState();

  const history = useHistory();

  function ShowDetail(e) {
    e.preventDefault();
    history.push(`/profile/pastas/${props.id}`)
  }

  function ShowDetailMemorie(e) {
    e.preventDefault();
    history.push(`/profile/memoria/${props.id}`)
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

  function handleClick(e) {
    if (e.type === 'click' && props.preview === 'dir') {
      ShowDetail(e);
    } else if (e.type === 'click') {
      ShowDetailMemorie(e);
    }
  }

  //props.preview === 'dir' ? ShowDetail : ShowDetailMemorie

  return (
    <Container>
      <li>
        <MemoriesInfo onClick={handleClick} onContextMenu={handleClick}>
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
    </Container>
  )
}
