import React from 'react';
import { render,screen } from '@testing-library/react';
import { render as renderer } from 'react-dom';
import '@testing-library/jest-dom/extend-expect';


import Footer from '../Components/footer/Footer';
describe(`Checking Footer Component`,() =>{ 
      test('Footer component created', () => {
        render(<Footer />);
      });
      test('Footer component Data', () => {
        const {getByText} =  render(<Footer/>);
        expect(getByText(`Copyright ©News API`)).toBeInTheDocument();
      });
      test('Footer Checking Div in Header equal to 1', () => {
        const element = document.createElement('div');
        renderer(<Footer/>,element);
        const count = element.getElementsByTagName('div').length
        expect(count).toBe(1);
      });
      test(`Footer Div with nav-link class`,() =>{
        const element = document.createElement('div');
        renderer(<Footer />,element);
        const link = element.getElementsByTagName('div');
        expect(link[0]).toHaveClass('bg-danger');
        
      });
      test('Footer  component checking class name ', () => {
        render(<Footer />);
        expect(screen.getByTestId('footer')).toHaveClass('footer');
      });

});export default Footer;