import React from "react";
import Sidebar from "../../containers/Sidebar/Sidebar";
import Main from "../../containers/Main/Main";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Layout;
