import Link from "next/link";
import { FunctionComponent } from "react";

const NoRecipesFound: FunctionComponent = () => (
  <p>
    No recipes found!{" "}
    <Link href="/">
      <a>Try removing some ingredients</a>
    </Link>
  </p>
);

export default NoRecipesFound;
