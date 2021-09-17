import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article file', () => {
  it('should display an article object', async () => {
    render(
      <Article
        title="title"
        author="author"
        description="description"
      />);

    const title = await screen.findByText('title');
    const author = await screen.findByText('author');
    const descp = await screen.findByText('description');

    expect(title).toMatchSnapshot();
    expect(author).toMatchSnapshot();
    expect(descp).toMatchSnapshot();
  });
});
