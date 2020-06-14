import { FunctionComponent } from "react";
import Header from "../../components/Header";
import RecipeRundown from "../../components/RecipeRundown";
import { Recipe } from "../../interfaces/Recipe";
import * as utils from "../../utils";

import styles from './RecipeContainer.module.scss';
import ApiError from "../../components/ApiError";

interface Props {
  readonly recipe?: Recipe;
}

const RecipeContainer: FunctionComponent<Props> = ({ recipe }) => (
  <div className={styles.recipeContainer}>
    {recipe ?
      (
        <>
          <Header heading={utils.toSentenceCase(recipe.label)} />
          <RecipeRundown recipe={recipe} />
        </>
      )
      :
      (
        <>
          <Header heading="Recipe not found" />
          <ApiError />
        </>
      )
    }
  </div>
)


export default RecipeContainer;