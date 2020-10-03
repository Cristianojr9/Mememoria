import React from 'react';
import Header from '../../components/header/';

import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <Header />
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div >
  )
}
