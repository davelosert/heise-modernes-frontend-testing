import { ApiLibraryContext } from './ApiConnector/ApiLibraryContext';
import App from './App';
import { assert } from 'assertthat';
import { cleanup, render } from '@testing-library/react';
import * as React from 'react';

const mockFetch = () => Promise.resolve('{}');

describe('App', () => {
  afterEach(async () => {
    cleanup();
  });
  const apiContext = {
    httpLib: mockFetch
  };

  it('renders the headline.', async () => {
    const { getByText } = render(
      <ApiLibraryContext.Provider value={ apiContext }>
        <App />
      </ApiLibraryContext.Provider>
    );

    const headline = getByText(/GetVaxxed!/iu);

    assert.that(document.body.contains(headline)).is.true();
  });
});
