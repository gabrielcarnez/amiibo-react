import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Row from './Row';

describe('<Row />', () => {
  test('it should mount', () => {
    render(<Row />);
    
    const row = screen.getByTestId('Row');

    expect(row).toBeInTheDocument();
  });
});