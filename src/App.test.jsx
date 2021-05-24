import App from './App';
import { assert } from 'assertthat';
import { render } from '@testing-library/react';
import * as React from 'react';

describe('<App>', () => {
  it('renders the headline.', async () => {
    const { getByText } = render(<App />);
    const headline = getByText(/impftermin buchen/iu);

    assert.that(document.body.contains(headline)).is.true();
  });
});
