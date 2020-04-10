import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import Card from './Card';


test('tests card', () => {


    // render without crashing
    const vdom = rtl.render(<Card />);


});

// it('renders without crashing', () => {

// });
