import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {inc} from './components/Dashboard'

// unit test react components
test('renders without crashing', () => {  
  render(<App />);
});

test('inc will indeed incroment the number given', ()=>{
    expect(inc(3)).toBe(4);
})