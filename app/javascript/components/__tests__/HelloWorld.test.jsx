import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld.jsx';

describe('HelloWorld', () => {
  it('renders "Hello World!" text', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
