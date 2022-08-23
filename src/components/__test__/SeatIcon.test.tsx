import SeatIcon from '../../Assets/SeatIcon';
import { screen, render, fireEvent } from '@testing-library/react'

test('simulates click events', () => {
  const mockSeatHandler = jest.fn();
  render(<SeatIcon colorName="white" onClick={mockSeatHandler} />);
  const svgItem = screen.getByTestId<HTMLLIElement>("svg")
  fireEvent.click(svgItem)
  expect(mockSeatHandler).toHaveBeenCalled()
});