import { Recipe } from "./Recipe";

type Hit = {
  readonly recipe: Recipe;
};

export type RecipeFromApi = {
  readonly hits: Hit[];
  readonly count: number;
  readonly status: string | undefined;
};