import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import ToastAnimated from "./ui-lib/toast";
/* import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; */

import './config/ReactotronConfig';

import { store, persistor } from './store';

import history from "./services/history";
import GlobalRoutes from './routes/GlobalRoutes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Router history={history}>
          <GlobalRoutes />
          <ToastAnimated autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
