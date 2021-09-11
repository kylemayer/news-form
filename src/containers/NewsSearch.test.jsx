/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('News Search Container', () => {
  it('should display a list of news', async () => {
    render(<NewsSearch />);

    const input = await screen.findAllByLabelText('Title');
    userEvent.type(input, 'Dragon');

    const submitBtn = await screen.findByRole('button', { title: 'find-articles' });
    userEvent.click(submitBtn);



  });
});

