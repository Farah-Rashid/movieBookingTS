import PageNotFound from '../PageNotFound'
import { render } from '@testing-library/react';


describe("testing page not found", () => {
  test('should take a snapshot', () => {
    const { container } = render(<PageNotFound />)
    expect(container).toMatchSnapshot()
  })
})
