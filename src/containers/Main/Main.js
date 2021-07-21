import React from "react";
import styles from "./Main.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SavedContent from "../SavedContent/SavedContent";

const Main = () => {
  return (
    <div className={styles.main}>
      <SearchBar />
      <SavedContent />
    </div>
  );
};

export default Main;
