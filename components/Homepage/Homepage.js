import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import IngredientsChecklist from "../IngredientsChecklist";
import availableIngredients from "./AvailableIngredients";
import styles from "./Homepage.module.scss";

function Homepage() {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("_ingredients");
    const parsedData = JSON.parse(data);
    setCheckedIngredients(parsedData);
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
        <Link href={`/search/by-ingredients?${checkedIngredients}`}>
          <Button disabled={!checkedIngredients.length} variant="contained">
            Search recipes
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
