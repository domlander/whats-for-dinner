import Link from "next/link";

const NoRecipesFound = () => (
  <p>
    No recipes found!{" "}
    <Link href="/">
      <a>Try removing some ingredients</a>
    </Link>
  </p>
);

export default NoRecipesFound;
