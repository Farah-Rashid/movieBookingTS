import BookingSeats from '../BookingSeats';
import { render, screen, fireEvent } from '@testing-library/react';
import vector from "../../Assets/Vector 1.png";

describe("testing bookingSeat", () => {
  test('should take a snapshot', () => {
    const { container } = render(<BookingSeats />)
    expect(container).toMatchSnapshot()
  })
  test("testing vector image", () => {
    render(<BookingSeats />)
    const vectorImg = screen.getByRole<HTMLImageElement>('img');
    expect(vectorImg).toBeInTheDocument()
    expect(vectorImg).toHaveAttribute('src', vector);
  })
  test("testing seat number", () => {
    render(<BookingSeats />)
    const numberList = screen.getAllByTestId<HTMLDataListElement>("seatNum").map((li) => li.textContent);
    expect(numberList).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
  })

  test('testing confirm button', () => {
    render(<BookingSeats />)
    fireEvent.click(screen.getByRole('button', { name: 'Confirm Booking' }))
  })
})