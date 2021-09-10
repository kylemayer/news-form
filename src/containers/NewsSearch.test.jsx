import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

describe('News Container', () => {
  it('should display a list of news', async () => {
    render(<NewsContainer />);

    const input = await screen.findAllByLabelText('Title');
    userEvent.type(input, 'News');

    const submitBtn = await screen.findByRole('button', { title: 'find-news' });
    userEvent.click(submitBtn);



  });
});

