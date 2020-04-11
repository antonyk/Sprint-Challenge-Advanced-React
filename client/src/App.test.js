import React from 'react';
// import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
// import CardList from './CardList';
// import './index.css';
// import {getByText} from '@testing-library/react';


afterEach(cleanup);

// first test
fit('renders without crashing', () => {
  // Arrange
  const vdom = render(<App />);

});

fit('tests that reset button is present', () => {
  // Arrange
  const vdom = render(<App />);

  const resetBtn = getByText('Reset Favorites');

  // assert
  expect(addBtn).toHaveLength(1);


});

