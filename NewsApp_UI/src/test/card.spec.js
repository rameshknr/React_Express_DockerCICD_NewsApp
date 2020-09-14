import React from 'react';
import { render,screen } from '@testing-library/react';
import { render as renderer } from 'react-dom';
import '@testing-library/jest-dom/extend-expect';


import Card from '../Components/card/Card';
// please add your test cases here
describe(`Checking CARD Component`,() =>{ 
      test('Card component created', () => {
        render(<Card />);
      });
      test('Checking Div in Card equal to 3', () => {
        const element = document.createElement('div');
        renderer(<Card/>,element);
        const count = element.getElementsByTagName('div').length
        expect(count).toBe(3);
      });
      test(`Card Div with card-body class`,() =>{
        const element = document.createElement('div');
        renderer(<Card />,element);
        const link = element.getElementsByTagName('div');
        expect(link[2]).toHaveClass('card-body');
        
      });
      test('CARD  component checking class name ', () => {
        render(<Card />);
        expect(screen.getByTestId('card')).toHaveClass('card');
      });
      test('CARD  component checking card image class name ', () => {
        render(<Card />);
        expect(screen.getByTestId('cardImage')).toHaveClass('card-img-top');
      });

});
export default Card;