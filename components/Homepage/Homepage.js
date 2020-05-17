import Link from "next/link";

import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <p>This is the homepage.</p>
      <Link href="/search/by-ingredients">
        <a>Search</a>
      </Link>
    </div>
  );
};

export default Homepage;
