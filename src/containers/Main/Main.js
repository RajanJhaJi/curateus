import React, { useState, useEffect, useCallback, useRef } from "react";
import data from "../../assets/data";
import styles from "./Main.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SavedContent from "../SavedContent/SavedContent";

const Main = () => {
  const items = [...data];

  const [articles, setArticles] = useState(items);
  // let contents = [];
  // let conts;

  function searchChangeHandler(e) {
    setArticles(
      items.filter((con, i) => {
        return con.tags.some((tag) => {
          return tag
            .trim()
            .toLowerCase()
            .split(" ")
            .join(" ")
            .includes(e.target.value);
        });
      })
    );
  }

  return (
    <div className={styles.main}>
      <SearchBar inputChangeHandler={searchChangeHandler} />
      <SavedContent articles={articles} />
    </div>
  );
};

export default Main;
