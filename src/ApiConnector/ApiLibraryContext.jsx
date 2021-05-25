import React from 'react';

const fetchContext = {
  httpLib: window.fetch?.bind(window)
};

const ApiLibraryContext = React.createContext(fetchContext);

export {
  fetchContext,
  ApiLibraryContext
};
