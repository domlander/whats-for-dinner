import Link from "next/link";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styles from "./RecipeList.module.scss";

function RecipeList({ recipes }) {
  if (!recipes || !recipes.hits) {
    return <p>No recipes found</p>;
  }

  return (
    <>
      <h1>Recipes</h1>
      <Grid container>
        {recipes.hits.map(
          ({
            recipe: { label, image, url, ingredientLines, totalTime, calories },
          }) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <h2>{label}</h2>
              <img src={image} alt="delicious meal" />
              <div className={styles.fullRecipe}>
                <Button variant="contained" href={url} target="_blank">
                  Full recipe
                </Button>
              </div>
              <div className={styles.ingredients}>
                <h4>Ingredients</h4>
                <ul>
                  {ingredientLines.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
              </div>
              {totalTime > 0 && <p>{`${totalTime} minutes`}</p>}
              <p>Total calories: {Math.round(calories).toLocaleString()}</p>
            </Grid>
          )
        )}
      </Grid>
    </>
  );
}

export default RecipeList;
