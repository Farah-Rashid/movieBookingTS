import Modal from '../Modal';
import { render, screen, fireEvent } from '@testing-library/react';


const data = ['A1', 'B1', 'C1', 'D1', 'A2', 'B2', 'C3']
const mockSetVisible = jest.fn();
const mockSeatSelector = jest.fn()
describe("Modal test", () => {
  test('should take a snapshot', () => {
    const { container } = render(<Modal setSelectedSeats={mockSeatSelector} setModalVisible={mockSetVisible} selectedSeats={data} />)
    expect(container).toMatchSnapshot()
  })
  test("testing modal closing button", () => {
    render(<Modal setSelectedSeats={mockSeatSelector} setModalVisible={mockSetVisible} selectedSeats={data} />)
    const closeButton = screen.getByTestId<HTMLImageElement>("closeButton")
    fireEvent.click(closeButton);
    expect(mockSetVisible).toHaveBeenCalled()
  });
})