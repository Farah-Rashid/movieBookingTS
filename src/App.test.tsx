import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
describe("testing movie cards", () => {
  test('should take a snapshot', () => {
    const { container } = render(<BrowserRouter><App /></BrowserRouter>)
    expect(container).toMatchSnapshot();
  })


})