import MovieCard from '../MovieCard'
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'

const data = [
  {
    id: 507086,
    title: "Jurassic World Dominion",
    poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
  },
];

describe("testing movie cards", () => {
  test('should take a snapshot', () => {
    const { container } = render(<BrowserRouter><MovieCard movies={data} /></BrowserRouter>)
    expect(container).toMatchSnapshot()
    const Nav = screen.getByRole<HTMLAnchorElement>("link");
    expect(Nav).toHaveAttribute("href", "/book/507086/Jurassic World Dominion")
  })

  test("testing close button", () => {
    render(<BrowserRouter><MovieCard movies={data} /></BrowserRouter>);
    const primaryButton = screen.getByRole('button', { name: /Book now/i })
    fireEvent.click(primaryButton);
  })
})