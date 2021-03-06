export type Recipe = {
  id?: string;
  readonly uri?: string;
  readonly label: string;
  readonly image: string;
  readonly url: string;
  readonly ingredientLines: string[];
  readonly totalTime: number;
  readonly calories: number;
  readonly yield: number;
  readonly source?: string
};