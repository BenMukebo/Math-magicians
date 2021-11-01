import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';

import Calculator from '../Calculator';

describe('Calculator page component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return the sum of two number form UI', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('none');
    expect(result.innerHTML).toBe('21');
  });
});
