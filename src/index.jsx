import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApiLibraryContext, fetchContext } from './ApiConnector/ApiLibraryContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ApiLibraryContext.Provider value={ fetchContext }>
      <App />
    </ApiLibraryContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
