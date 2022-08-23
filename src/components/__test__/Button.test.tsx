import Button from '../Button/Button';
import { screen, render, fireEvent } from '@testing-library/react'

test('simulates click events on Button components', () => {
  const mockCallBack = jest.fn();
  render(<Button onClick={mockCallBack}>Ok</Button>);
  const button = screen.getByTestId<HTMLButtonElement>("buttonItem")
  fireEvent.click(button)
  expect(mockCallBack).toHaveBeenCalled()
});
