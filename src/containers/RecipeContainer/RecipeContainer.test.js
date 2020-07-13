import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RecipeContainer from './RecipeContainer';
import * as utils from "../../utils"

describe("Recipe", () => {
  it('renders page items', () => {
    const { getByRole, getAllByRole } = render(<RecipeContainer recipe={testData} />);

    expect(getByRole('navigation')).toBeTruthy();
    expect(getAllByRole('link')[0]).toHaveTextContent('Home')
    expect(getAllByRole('link')[1]).toHaveTextContent(testData.source)
    expect(getAllByRole('link')[2]).toHaveTextContent(testData.url)
    expect(getAllByRole('heading')[0]).toHaveTextContent(utils.toSentenceCase(testData.label))
    expect(getAllByRole('heading')[1]).toHaveTextContent('Ingredients')
    expect(getAllByRole('heading')[2]).toHaveTextContent('Recipe')
    expect(getByRole('img')).toHaveAttribute('src', testData.image)
  })
})

const testData = {
  "id": "b79327d05b8e5b838ad6cfd9576b30b6",
  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
  "label": "Chicken Vesuvio",
  "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
  "source": "Serious Eats",
  "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
  "ingredientsLines": [
    "1/2 cup olive oil",
    "5 cloves garlic, peeled",
    "2 large russet potatoes, peeled and cut into chunks",
    "1 cup frozen peas, thawed"
  ],
  "totalTime": 60,
  "calories": 4055,
  "yield": "4",
}