import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList file', () => {
  it('should display article in a ul', async () => {
    const articles = [
      {
        title: 'iPhone 13 Release',
        author: 'Sam',
        description: 'Five new colors',
      },
      {
        title: 'PS5 on Sale',
        author: 'Sally',
        description: 'Sale on Friday',
      },
    ];

    render(
      <ArticleList articles={articles} />
    );

    const ul = await screen.findByRole('list', { name: 'article' });
    expect(ul).toMatchSnapshot();
  });
});
