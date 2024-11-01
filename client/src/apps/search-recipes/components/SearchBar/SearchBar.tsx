import { memo, useState } from "react";
import styles from "./searchBar.module.css";

const SearchBar = memo(({ onSearch, initialQuery = "" }: { onSearch: (value: string) => void; initialQuery?: string }) => {
  const [searchValue, setSearchValue] = useState(initialQuery);
  console.log("Re-render SearchBar", initialQuery);

  return (
    <div className={styles.searchContainer}>
      <form
        className={styles.searchForm}
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(searchValue);
        }}
      >
        <input
          className={styles.input}
          placeholder="Search recipe"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
});

export default SearchBar;
