import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import App from './App';
import CardList from './CardList';

xtest('basic functions of card list', () => {
  return false;
  
  // arrange
  const root = document.getElementById('root');
  // render app
  const cdom = rtl.render(<App />);
  // const vdom = rtl.render(<CardList />);


  // act


  // assert

  // cleanup?
  ReactDOM.unmountComponentAtNode(root);
})

