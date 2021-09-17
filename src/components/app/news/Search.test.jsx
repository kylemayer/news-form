import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search file', () => {
  it('should render an input form and a button', async () => {
    render(<Search />);

    const input = await screen.findByLabelText('search');
    userEvent.type(input, 'Bidden');

    const submitButton = await screen.findByRole('button', {
      name: 'find-articles',
    });

    expect(input).toMatchSnapshot();
    expect(submitButton).toMatchSnapshot();
  });
});
