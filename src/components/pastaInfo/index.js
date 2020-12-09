import React from 'react';
import { Link, useParams } from 'react-router-dom';
import qs from 'qs';

import IconFolder from '../../assets/folder';

import api from '../../services/api';

export default function index(props) {
  return (
    <div>
      <li>
        <IconFolder size={30} color={'#757575'} />
        <Link>
          {props.name}
        </Link>
      </li>
    </div>
  )
}
