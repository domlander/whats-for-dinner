import { FunctionComponent } from "react";
import Header from "../../components/Header";
import RecipeRundown from "../../components/RecipeRundown";
import { Recipe } from "../../interfaces/Recipe";
import * as utils from "../../utils";

import styles from './RecipeContainer.module.scss';

interface Props {
  readonly recipe: Recipe;
}

const RecipeContainer: FunctionComponent<Props> = ({ recipe, recipe: { label } }) => (
  <div className={styles.recipeContainer}>
    <Header heading={utils.toSentenceCase(label)} />
    <RecipeRundown recipe={recipe} />
  </div>
)


export default RecipeContainer;