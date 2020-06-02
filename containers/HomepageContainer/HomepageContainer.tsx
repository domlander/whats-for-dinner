import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
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
    <div className={styles.homepage}>
      <div className={styles.topRow}>
        <RestaurantMenuIcon style={{ fontSize: 60 }} color="secondary" />
        <span className={styles.heading}>
          <Typography variant="h2">Ingredients</Typography>
        </span>
      </div>
      <div className={styles.checklist}>
        <IngredientsChecklist
          ingredients={availableIngredients}
          checkedIngredients={checkedIngredients}
          setCheckedIngredients={setCheckedIngredients}
        />
      </div>
      <div className={styles.search}>
        <Link href={`/search?ingredients=${checkedIngredients}&page=1`}>
          <Button disabled={!checkedIngredients.length} variant="contained">
            Search recipes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomepageContainer;