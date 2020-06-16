import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import IngredientsChecklist from "../../components/IngredientsChecklist";
import availableIngredients from "../../interfaces/AvailableIngredients";

import styles from "./HomepageContainer.module.scss";

const HomepageContainer = () => {
  const [checkedIngredients, setCheckedIngredients] = useState<Array<string>>([]);

  useEffect(() => {
    const data: string | null = localStorage.getItem("_ingredients");
    const parsedData: string[] = data && JSON.parse(data);
    if (parsedData) {
      setCheckedIngredients(parsedData);
    }
  }, []);

  return (
    <div className={styles.homepageContainer}>
      <Typography className={styles.pageHeading} variant="h3">
        Ingredients
      </Typography>
      <Typography className={styles.subHeading} variant="subtitle1">Select ingredients to find a yummy recipe</Typography>
      <div className={styles.checklist}>
        <IngredientsChecklist
          ingredients={availableIngredients}
          checkedIngredients={checkedIngredients}
          setCheckedIngredients={setCheckedIngredients}
        />
      </div>
      <div className={styles.search}>
        <Link href={`/recipes?ingredients=${checkedIngredients}&page=1`}>
          <Button disabled={!checkedIngredients.length} variant="contained">
            Search recipes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomepageContainer;
