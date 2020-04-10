import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// first test
fit('renders without crashing', () => {
  // Arrange
  const vdom = render(<App />);

});

it('tests that reset button is present', () => {
  // Arrange
  const vdom = render(<App />);

  const resetBtn = getByText('Reset Favorites');

  // assert
  expect(addBtn).toHaveLength(1);


});

