import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import Card from './Card';


xtest('tests card', () => {
  return false;

  // arrange
  const root = document.getElementById('root');
  // render app
  const vrom = ReactDOM.render(<App />, root);
  // const vdom = rtl.render(<Card />);

  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);


  // act


  // assert

  // cleanup?
  ReactDOM.unmountComponentAtNode(root);
});
