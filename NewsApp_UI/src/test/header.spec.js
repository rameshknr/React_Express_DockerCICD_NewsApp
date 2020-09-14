import React from 'react';
import { render,screen } from '@testing-library/react';
import { render as renderer } from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import Header from '../Components/header/Header';

describe(`Checking Header Component`,() =>{ 
      test('Header component created', () => {
        render(<Header/>);
      });
      test('Checking hyperLink in Header equal to 4', () => {
        const element = document.createElement('div');
        renderer(<Header/>,element);
        const count = element.getElementsByTagName('a').length
        expect(count).toBe(4);
      });
      test('Header  component checking class name ', () => {
        render(<Header />);
        expect(screen.getByTestId('header')).toHaveClass('navbar-brand');
      });

});export default Header;
