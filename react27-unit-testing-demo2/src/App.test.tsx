import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Unit Testing Demo heading', () => {
  render(<App />);
  const heading = screen.getByText("Unit Testing Demo");
  expect(heading).toBeInTheDocument();
});
