import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FullDetail from './FullDetail';

describe('<FullDetail />', () => {
  test('it should mount', () => {
    render(<FullDetail />);
    
    const fullDetail = screen.getByTestId('FullDetail');

    expect(fullDetail).toBeInTheDocument();
  });
});