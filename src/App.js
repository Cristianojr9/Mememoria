import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import GlobalRoutes from './routes/GlobalRoutes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <GlobalRoutes />
        <ToastContainer autoClose={5000} />
      </Router>
    </>
  );
}

export default App;
