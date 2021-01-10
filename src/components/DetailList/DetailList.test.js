import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailList from './DetailList';

describe('<DetailList />', () => {
  test('it should mount', () => {
    render(<DetailList />);
    
    const detailList = screen.getByTestId('DetailList');

    expect(detailList).toBeInTheDocument();
  });
});