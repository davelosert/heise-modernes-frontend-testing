import App from './App';
import { assert } from 'assertthat';
import { cleanup, render } from '@testing-library/react';
import * as React from 'react';

describe('App', () => {
  afterEach(async () => {
    cleanup();
  });

  it('renders the headline.', async () => {
    const { getByText } = render(<App />);

    const headline = getByText(/impftermin buchen/iu);

    assert.that(document.body.contains(headline)).is.true();
  });
});
