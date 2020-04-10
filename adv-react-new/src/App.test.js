import React from 'react';
import { render, cleanup, queryAllByText } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

// default CRA test
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// first test
it('renders app with correct title', () => {
  // Arrange
  const { getByText } = render(<App />);
  const target = getByText(/women's world cup/i);

  // assert
  expect(target).toBeInTheDocument();
});

it('tests that reset button is present', () => {
  // Arrange
  const vdom = render(<App />);

  const target = vdom.queryAllByText(/reset favorite/i);

  // assert
  expect(target).toHaveLength(1);
});

