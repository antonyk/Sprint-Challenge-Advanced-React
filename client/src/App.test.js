import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from './App';
import CardList from './CardList';
// import './index.css';


fit('renders without crashing', () => {

  // AAA
  // first test
  const vdom = render(<App />);

  const resetBtn = getByText('Reset Favorites');

  expect(addBtn).toHaveLength(1);








  // cleanup
  // cleanup();
  // ReactDOM.unmountComponentAtNode(div);
});

