import React from "react";
import styles from "./SearchBar.module.css";
import { FiSearch, FiArrowDown } from "react-icons/fi";

const SearchBar = (props) => {
  // function changeHandler(event) {
  //   console.log(event.target.value);
  // }
  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input
          // type="search"
          placeholder="place any Url here and press enter to save it."
          onChange={props.inputChangeHandler}
        />
        <div className={styles.searchBtns}>
          <span>X</span>
          <span>K</span>
        </div>
      </div>
      <a href="#" className="btn-primary">
        add
      </a>
      <div className={styles.searchIcons}>
        <FiSearch className={styles.searchIcon} />
        <FiArrowDown className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
