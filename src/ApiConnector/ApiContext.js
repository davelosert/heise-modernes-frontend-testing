import { createFetchApi } from './FetchApi';
import React from 'react';

const fetchContext = {
  api: createFetchApi()
};

const ApiContext = React.createContext(fetchContext);

export {
  fetchContext,
  ApiContext
};
