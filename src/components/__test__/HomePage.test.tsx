import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../HomePage';
const getMovieData = require('./__mock__/index');
const axios = require('axios');
jest.mock('axios');
const mockResponse = {
  data: {
    results: [
      {
        id: 507086,
        poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        title: "Jurassic World Dominion",
      },
      {
        id: 759175,
        poster_path: "/9pCoqX24a6rE981fY1O3PmhiwrB.jpg",
        title: "The Princess",
      },
      {
        id: 919355,
        poster_path: "/uSMJbYhaEpQtF9vkMhpgljc0CA4.jpg",
        title: "Dragon Knight",
      },
    ],
  }
}



describe("testing homepage", () => {
  test('returns path of the movie', async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponse.data.results })
    const movieData = await getMovieData();
    expect(movieData[0].poster_path).toEqual("/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg");
  });

  test('should take a snapshot', () => {
    const { container } = render(<HomePage />)
    expect(container).toMatchSnapshot();
  })

  test("testing input value", () => {
    render(<HomePage />)
    const inputValue = screen.getByPlaceholderText<HTMLInputElement>(/search/i)
    expect(inputValue).toBeInTheDocument()
    fireEvent.change(inputValue, { target: { value: "harry potter" } })
    expect(inputValue.value).toBe("harry potter");
  })
});