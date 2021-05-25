import { ApiContext } from './ApiConnector/ApiContext';
import App from './App';
import { assert } from 'assertthat';
import { createMockApi } from './ApiConnector/MockApi';
import { cleanup, render, waitFor } from '@testing-library/react';
import * as React from 'react';

const createMockContext = (api = createMockApi()) => ({
  api: createMockApi(api)
});

describe('App', () => {
  afterEach(async () => {
    cleanup();
  });

  it('renders the headline.', async () => {
    const { getByText } = render(
      <ApiContext.Provider value={ createMockContext() }>
        <App />
      </ApiContext.Provider>
    );

    const headline = getByText(/GetVaxxed!/iu);

    assert.that(document.body.contains(headline)).is.true();
  });

  it('renders loading spinner while data is loading.', async () => {
    let resolveCall;
    const controlledApi = createMockApi({
      loadAvailableDates: async () => new Promise(resolve => {
        resolveCall = resolve;
      })
    });

    const { getByRole } = render(
      <ApiContext.Provider value={ createMockContext(controlledApi) }>
        <App />
      </ApiContext.Provider>
    );
    const loadingSpinner = getByRole('status');

    assert.that(document.body.contains(loadingSpinner));

    // Cleanup
    resolveCall([
      { date: '27.05.', hours: [ '09:00 Uhr' ]}
    ]);
  });

  it('renders the form with the loaded data.', async () => {
    const mockApi = createMockApi({
      loadAvailableDates: async () => Promise.resolve([
        { date: '27.05.', hours: [ '09:00 Uhr' ]},
        { date: '28.05.', hours: [ '13:00 Uhr' ]}
      ])
    });

    const { getByText } = render(
      <ApiContext.Provider value={ createMockContext(mockApi) }>
        <App />
      </ApiContext.Provider>
    );

    await waitFor(() => {
      assert.that(document.body.contains(getByText('Terminauswahl')));
    });
  });
});
