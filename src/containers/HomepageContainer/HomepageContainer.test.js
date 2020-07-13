import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomepageContainer from './HomepageContainer';

describe("Homepage", () => {
  it('renders page items', () => {
    const { getByRole, getAllByRole } = render(<HomepageContainer />);

    expect(getAllByRole('heading')[0]).toHaveTextContent('Ingredients')
    expect(getAllByRole('heading')[1]).toHaveTextContent('Select ingredients to find a yummy recipe')
    expect(getAllByRole('checkbox')).toHaveLength(18)
    expect(getByRole('button')).toHaveTextContent('Search recipes')
  })
})