import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoResult from './NoResult';

describe('<NoResult />', () => {
  test('it should mount', () => {
    render(<NoResult />);
    
    const noResult = screen.getByTestId('NoResult');

    expect(noResult).toBeInTheDocument();
  });
});