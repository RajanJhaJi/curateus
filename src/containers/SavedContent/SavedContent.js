import React from "react";
import Contents from "../../components/Contents/Contents";
import styles from "./SavedContent.module.css";

const SavedContent = (props) => {
  return (
    <>
      <Contents items={props.articles} />
    </>
  );
};

export default SavedContent;
