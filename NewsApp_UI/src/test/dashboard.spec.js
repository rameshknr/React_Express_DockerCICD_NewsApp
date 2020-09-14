import React from 'react';
import { render } from '@testing-library/react';
import { render as renderer } from 'react-dom';
import '@testing-library/jest-dom/extend-expect';


import Dashboard from '../Components/dashboard/Dashboard';
import Filter from '../Components/filter/filter';

// please add your test cases here
describe(`Checking Dashboard Component`,() =>{ 
      test('Dashboard component created', () => {
        render(<Dashboard />);
      });
      test('Dashboard Checking div in Header equal to 17', () => {
        const element = document.createElement('div');
        renderer(<Dashboard/>,element);
        const count = element.getElementsByTagName('div').length
        expect(count).toBe(17);
      });
      test(`Dashboard div with nav-link class`,() =>{
        const element = document.createElement('div');
        renderer(<Dashboard />,element);
        const link = element.getElementsByTagName('div');
        expect(link[1]).toHaveClass('row');
        expect(link[4]).toHaveClass('modal-dialog');
      });  
      
       
     
});

export default Dashboard;
