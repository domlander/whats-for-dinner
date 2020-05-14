import React from "react";
import Link from "next/link";

import styles from "./by-ingredients.module.scss";

function byIngredients() {
  return (
    <>
      <h1 className={styles.heading}>Recipes</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}

export default byIngredients;
