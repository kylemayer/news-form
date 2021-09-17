/* eslint-disable max-len */
import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('News Search Container', () => {
  it('should display a list of news', async () => {
    render(<NewsSearch />);

    const input = await screen.findByLabelText('search');
    userEvent.type(input, 'Bidden');

    const submitBtn = await screen.findByRole('button', { title: 'find-articles' });
    userEvent.click(submitBtn);

    return waitFor(() => {
      const articles = screen.getAllByText('Bidden', { exact: false });
      expect(articles.length).toBeGreaterThan(1);
    });
  });
});

