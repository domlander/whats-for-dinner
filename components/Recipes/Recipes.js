import Link from "next/link";

import styles from "./Recipes.module.scss";

const Recipes = () => {
  return (
    <>
      <div className={styles.recipes}>
        <h1 className={styles.heading}>Recipes</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
};

export default Recipes;
