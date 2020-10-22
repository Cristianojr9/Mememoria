import React from 'react';

import {
  Container,
  MemoriesInfo,
}
  from './styles';

import { BiMovie } from 'react-icons/bi'

//import Movie from '../../assets/movie.svg';

export default function Memories() {
  return (
    <Container>
      <li>
        <MemoriesInfo>
          <span>
            <BiMovie color={'#AF52DE'} size={150} />
          </span>
          <div>
            <span>
              <BiMovie color={'#AF52DE'} size={40} />
            </span>
            <strong>Lições de vida #7</strong>
          </div>
        </MemoriesInfo>
      </li>
    </Container>
  )
}
